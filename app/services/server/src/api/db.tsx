import { MongoClient } from 'mongodb';

enum Entity {
  // Database names
  HL = 'hl',
  // Collection/Table names
  USER = 'users',
  SECRET = 'secrets',
  SESSION = 'sessions',
}

interface DBRepository {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  getUser(username: string): any;
  createUser(username: string, password: string, salt: string): Promise<boolean>;
  storeSession(username: string, session: string): Promise<boolean>;
}

class DB {
  private dbRepository: DBRepository;

  constructor(dbRepository: DBRepository) {
    this.dbRepository = dbRepository;
  }

  connect() {
    this.dbRepository.connect();
  }

  disconnect() {
    this.dbRepository.disconnect();
  }

  /**
   * Fetches a user from the database based on the given username.
   *
   * @param {string} username - The username of the user to fetch.
   * @return {any} A promise that resolves to a Document w/ id with user information. Returns null if no user is found.
   */
  getUser(username: string): any {
    return this.dbRepository.getUser(username);
  }

  /**
   * Creates a new user with the given username, password, and salt.
   *
   * @param {string} username - The username of the user.
   * @param {string} password - The (hashed) password of the user.
   * @param {string} salt - The random salt used to hash the password.
   * @returns {Promise<boolean>} A promise that resolves to a boolean indicating whether the user was created successfully. Returns false if the user already exists.
   */
  createUser(username: string, password: string, salt: string): Promise<boolean> {
    return this.dbRepository.createUser(username, password, salt);
  }
  
  /**
   * Stores a session id for a given user.
   *
   * @param {string} username - The username for which the session id is being stored.
   * @param {string} session - The session id to be stored.
   * @return {Promise<boolean>} - A promise that resolves to a boolean indicating whether the session was successfully stored. Returns false if the session could not be stored.
   */
  storeSession(username: string, session: string): Promise<boolean> {
    return this.dbRepository.storeSession(username, session);
  }
}

/**
 * MongoDB
 */
class MongoDB implements DBRepository {
  private client: MongoClient;

  constructor(host: string = 'localhost', port: string = '27017') {
    this.client = new MongoClient(
      `mongodb://${host}:${port}`, {
        connectTimeoutMS: 5000,
        maxPoolSize: 10,
    });
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    } catch (err) {
      console.error('Error disconnecting from MongoDB:', err);
    }
  }

  async getUser(username: string): Promise<any> {
    const user: any = await this.client.
    db(Entity.HL).
    collection(Entity.SECRET).
    findOne({username: username});
    return user;
  }

  async createUser(username: string, password: string, salt: string): Promise<boolean> {
    const data = await this.client
    .db(Entity.HL)
    .collection(Entity.SECRET)
    .updateOne(
      {username: username},
      {$set: {
        username: username,
        hash: password,
        salt: salt
      }},
      {upsert: true});
    return data.modifiedCount > 0;
  }

  async storeSession(username: string, session: string): Promise<boolean> {
    const data = await this.client
    .db(Entity.HL)
    .collection(Entity.SESSION)
    .updateOne(
      {username: username},
      {$set: {
        username: username,
        sid: session,
      }},
      {upsert: true});
    return data.acknowledged;
  }
}

export {
  MongoDB,
  DB,
}
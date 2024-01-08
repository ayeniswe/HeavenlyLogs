db = connect('mongodb://hl-mongodb/hl');

db.secrets.insertMany( [
   {
      username: "admin",
      hash: "c13d1301c974bdfef281ae8b77b7d7b0e18026086c9c40752311eaf4098709c6",
      salt: "9cbaefed935a7a42bed124d774855942"
   }
] )
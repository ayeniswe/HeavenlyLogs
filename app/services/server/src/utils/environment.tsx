import { error } from "console";
import { boldGreen, boldRed, boldYellow } from "./style.js";

enum ENVIRONMENT {
    DEVELOPMENT = 'DEVELOPMENT',
    TEST = 'TEST',
    PRODUCTION = 'PRODUCTION'
};

/**
 * Generates a colored text representation of the environment.
 *
 * @param {string} env - The environment name to generate the colored text for.
 * @return {string} The colored text representation of the environment.
 */
const getEnvColor = (env: string) => {
    let envColored = `[${env}]`;
    if (ENVIRONMENT[env] == ENVIRONMENT.DEVELOPMENT) {
      return boldYellow(envColored);
    }
    else if (ENVIRONMENT[env] == ENVIRONMENT.TEST) {
      return boldGreen(envColored);
    }
    else if (ENVIRONMENT[env] == ENVIRONMENT.PRODUCTION) {
      return boldRed(envColored);
    }
    throw error(`Invalid environment: ${env}`);
};

export {
  getEnvColor,
  ENVIRONMENT
};

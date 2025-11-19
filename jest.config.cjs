module.exports = {
  preset: "ts-jest/presets/default-esm", 
  testEnvironment: "node",

  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: "./tsconfig.json"
    }
  },

  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: "./tsconfig.json"
      }
    ]
  },

  extensionsToTreatAsEsm: [".ts"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};

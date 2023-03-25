module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "plugins": [
    "jest",
    "jest/recommended"
  ],
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
};

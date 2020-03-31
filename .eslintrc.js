module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": [
        "error",
        {
          "semi": true,
          "trailingComma": "all",
          "singleQuote": true,
          "printWidth": 120,
          "tabWidth": 2
        }
      ]
    },
    "overrides": [
      {
          "files": ["**/*.tsx"],
          "rules": {
              "react/prop-types": "off"
          }
      }
  ]
};
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "plugins": [
    "@stylistic"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "prettier"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs,mjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    // Estilo
    "@stylistic/semi": "error",
    "@stylistic/spaced-comment": "error",
    "@stylistic/comma-dangle": "error",
    "@stylistic/indent": ["error", 2],
    "@stylistic/quotes": ["error", "double"],

    // Buenas prácticas y convenciones comunes
    "no-var": "error", // No permitir 'var'
    "prefer-const": "error", // Preferir 'const' sobre 'let' cuando sea posible
    "comma-dangle": ["error", "never"], // No permitir comas finales
    "no-empty": "error", // No permitir bloques de código vacíos
    "no-unused-vars": "error", // No permitir variables no utilizadas
    "no-empty-function": "error", // No permitir funciones vacías
    "import/no-duplicates": ["error", {"prefer-inline": true}] // No permitir importaciones duplicadas
  }
};

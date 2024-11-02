import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: { globals: globals.node },
    rules: {
      semi: ['error', 'always'],           // Requiere punto y coma al final
      quotes: ['error', 'single'],         // Usa comillas simples
      'no-console': 'off',                 // Permite console.log
      indent: ['error', 2],                // Usa 2 espacios para indentación
    },
    settings: {
      'eslint.autoFixOnSave': true         // Activa corrección al guardar
    }
  },
  pluginJs.configs.recommended,
];
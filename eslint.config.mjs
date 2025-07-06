import globals from "globals";
import { defineConfig } from "eslint/config";
import  findPaymentRule from './rules/find-payment.js';
import js from "@eslint/js";
import findFixmeRule from './rules/find-fixme.js';
import functionParamRule from './rules/function-param.js'


export default defineConfig([
  js.configs.recommended,
  { ignores:["rules/*"],files: ["**/*.{js,mjs,cjs}"],
  languageOptions: {
      ecmaVersion: 'latest',  // Enables modern JS
      sourceType: 'module',   // Enables import/export
    },
   rules:{
"consistent-return": "error",
"no-console": "error",
"no-restricted-imports":["error","underscore"],
"eqeqeq":"error",
"custom/find-payment": "error",
"custom/find-fixme":["error",["todo","abcd","FIXme"]],
"custom/function-param":"error"
  },
   plugins: {
      custom: {
        rules: {
          'find-payment': findPaymentRule,
          'find-fixme': findFixmeRule,
          'function-param':functionParamRule
        }
      }
    }
  
 },
  { ignores:["rules/*"],files: ["**/*.js"], languageOptions: { sourceType: "module" ,  ecmaVersion: 'latest'} },
  { ignores:["rules/*"],files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser, ecmaVersion: 'latest',  // Enables modern JS
      sourceType: 'module',   } },
]);


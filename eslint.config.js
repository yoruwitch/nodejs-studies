/* eslint-disable linebreak-style */
import globals from "globals";

import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            indent: ["error", 4],
            "linebreak-style": ["error", "windows"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];

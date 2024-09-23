import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        ignores: ['node_modules/, build']
    },
    { languageOptions: { globals: globals.browser } },
    ...tseslint.configs.recommended
];

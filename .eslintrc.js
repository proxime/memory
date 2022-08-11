const path = require('path');

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier'],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
        project: path.resolve(__dirname, './tsconfig.json'),
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'no-console': 'warn',
        'no-var': 'error',
        'no-shadow': 0,
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^[^I]',
                    match: true,
                },
            },
        ],
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    any: {
                        message:
                            "Avoid this type unless it's absolutely necessary. Use unknown or custom interface instead",
                        fixWith: 'unknown',
                    },

                    String: {
                        message: 'Use string instead',
                        fixWith: 'string',
                    },

                    Function:
                        "Avoid this type unless it's absolutely necessary. Create custom type instead.",
                },
            },
        ],
    },
    overrides: [
        {
            files: ['*.json'],
            rules: {
                quotes: ['error', 'double'],
            },
        },
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
                '@typescript-eslint/explicit-module-boundary-types': 0,
            },
        },
    ],
};

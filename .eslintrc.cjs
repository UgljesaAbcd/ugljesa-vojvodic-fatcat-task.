const path = require('path');

/** @type {import("eslint").Linter.Config} */
const config = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-refresh',
        '@typescript-eslint',
        'react',
        'import',
        'react-hooks',
        'unused-imports',
        'jsx-a11y',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    overrides: [
        {
            extends: [
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            files: ['*.ts', '*.tsx', '*.cjs', '*.mjs'],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
        },
    ],
    settings: {
        react: {
            version: '18.2',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules'],
            },
            alias: {
                map: [
                    ['@homework-task', './src/'],
                    ['@common', './src/common/'],
                    ['@services', './src/services/'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {
                allowConstantExport: true,
            },
        ],
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'react-hooks/exhaustive-deps': 'error',
        'no-undef': 'error',
        eqeqeq: 'error',
        'no-console': 'error',
        'no-unused-vars': 'error',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'type'],
                pathGroups: [
                    {
                        pattern: 'react*',
                        group: 'builtin',
                        position: 'after',
                    },
                    {
                        pattern: 'clsx',
                        group: 'external',
                        position: 'after',
                    },
                    {
                        pattern: '@**/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};

module.exports = config;

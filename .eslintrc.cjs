module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
        'airbnb-base',
        'plugin:node/recommended',
    ],
    plugins: ['prettier'],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'max-len': 'off',
        'node/no-missing-import': 'off',
        'import/no-unresolved': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        'no-restricted-syntax': 'off',
        'no-unused-expressions': 'off',
        'no-alert': 'error',
        'import/named': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'guard-for-in': 'off',
        'vue/no-v-html': 'off',
        'import/prefer-default-export': 'off',
    },
    // Newly added property
    parserOptions: {
        ecmaVersion: 12,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['babel-polyfill', 'babel-polyfill/dist/polyfill.min.js'],
                    ['helper', './utils/helper'],
                    ['material-ui/DatePicker', '../custom/DatePicker'],
                    ['material-ui', 'material-ui-ie10'],
                    ['@', './src'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
    // settings: {
    //   'import/resolver': {
    //     alias: {
    //       map: [['@', './src/']],
    //       extensions: ['.js', '.vue'],
    //     },
    //   }
    // },
}

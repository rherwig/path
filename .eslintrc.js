module.exports = {
    root: true,
    env: {
        'jest/globals': true,
    },
    extends: [
        'airbnb-base',
    ],
    plugins: [
        'jest',
    ],
    rules: {
        'arrow-parens': 'off',
        'arrow-body-style': 'off',
        'indent': ['error', 4],
        'no-shadow': 'warn',
        'global-require': 'off',
        'no-underscore-dangle': 'off',
        'no-bitwise': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-trailing-spaces': 'off',
        'no-restricted-globals': 'off',
        'no-param-reassign': 'off',
    },
};

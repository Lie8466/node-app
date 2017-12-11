module.exports = {
    root: true,
    plugins: [
        'html',
        'eslint-plugin-html'
    ],
    parserOptions: {
        'sourceType': 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    'rules': {
        'no-console': process.env.NODE_ENV === 'prod' ? 2 : 0,
        'no-debugger': process.env.NODE_ENV === 'prod' ? 2 : 0,
        'guard-for-in': 0,
        'no-throw-literal': 0,
        'no-param-reassign': 0
    },
    globals: {
    },
    env: { "es6": true }
}

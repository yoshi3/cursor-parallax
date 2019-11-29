module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    chrome: '40',
                    android: '4.2',
                    ie: '11',
                    safari: '9',
                },
                useBuiltIns: 'usage',
            },
        ],
    ],
    plugins: ['@babel/plugin-transform-object-assign', '@babel/plugin-proposal-object-rest-spread'],
};

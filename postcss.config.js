module.exports = {
    plugins: {
        // 'autoprefixer': {
        //     'overrideBrosersList':[
        //         'Android >= 4.0',
        //         'iOS >= 8'
        //     ]
        // },
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
            selectorBlackList: ['vant-', 'my-']
        },
    },
};
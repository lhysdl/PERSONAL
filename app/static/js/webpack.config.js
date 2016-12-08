module.exports = {
    entry : {
        index : "./index.js",
        login: "./login.js"
    },
    output : {
        path : "./build",
        filename : "[name].bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module : {
        preLoaders :[
            {test:/\.jsx$/, loader:'jsx-loader'}
        ]

    }
}
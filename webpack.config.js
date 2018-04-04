const path = require("path");

export default{
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loaders: 'babel'
            }
        ]
    }
};

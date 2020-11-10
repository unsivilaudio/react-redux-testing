module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname,
        publicPath: '/build',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 'es2015', 'stage-1'
                        presets: ['@babel/preset-env', '@babel/react'],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
    },
};

const htmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv-webpack');

const htmlPlugin = new htmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
});
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [htmlPlugin, new dotenv()]
};
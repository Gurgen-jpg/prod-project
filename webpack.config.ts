
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";


const handler = (percentage: number, message: string, ...args: string[]) => {
    console.info(percentage, message, ...args);
};
const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "my app",
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.ProgressPlugin({handler})
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

}
export default config;

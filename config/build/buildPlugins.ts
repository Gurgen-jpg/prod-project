import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'


export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            title: "my app",
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
        }),
        new ReactRefreshWebpackPlugin(),
    ]
}
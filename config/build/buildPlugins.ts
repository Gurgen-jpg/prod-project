import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, {WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/config";


export function buildPlugins({paths}: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            title: "my app",
            template: paths.html,
        }),
        new webpack.ProgressPlugin()
    ]
}
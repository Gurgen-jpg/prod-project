import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        // historyApiFallback: true,
        //проксировать через index всё SPA
        historyApiFallback: true,
        hot: true
    }
}
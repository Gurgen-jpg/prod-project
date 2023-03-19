import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    // Если использовать ts то этого дастаточно, если использовать jsx, то нужен babel-loader
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = buildBabelLoader(options);
    const cssLoader = buildCssLoader(isDev);
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,

    ];
}

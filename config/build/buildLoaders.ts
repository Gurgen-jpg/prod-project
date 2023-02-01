import {RuleSetRule} from "webpack";


export function buildLoaders(): RuleSetRule[] {
    //Если использовать ts то этого дастаточно, если использовать jsx, то нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return  [
        typescriptLoader,
        cssLoader,
    ]
}
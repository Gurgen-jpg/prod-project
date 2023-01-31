import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath} from "./config/build/types/config";
import path from "path";
import webpack from "webpack";


const mode = 'development';
const isDev = mode === 'development';

const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})
export default config;

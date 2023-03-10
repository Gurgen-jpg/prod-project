import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { BuildPath } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.extensions.push('.tsx', '.ts', '.js');
    config.resolve.modules.push(paths.src);

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));
    config.plugins.push(new DefinePlugin({
        _IS_DEV_: true,
        __API__: JSON.stringify(''),
    }));
    return config;
};

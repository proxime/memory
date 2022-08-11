import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { config } from '../configuration';

export const css = {
    test: /\.css$/,
    use: [
        config.IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
    ],
    exclude: /node_modules/,
};

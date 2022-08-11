import { merge } from 'webpack-merge';

import { WebpackCommonConfig } from './common';
import { paths, config } from './configuration';

const devServer = {
    open: true,
    compress: false,
    port: config.PORT,
    host: config.HOST,
    hot: true,
    client: {
        progress: true,
    },
    static: [
        {
            watch: true,
            directory: paths.dist,
        },
    ],
};

/**
 * Webpack development configuration.
 */
const WebpackConfig = {
    devServer,
    devtool: 'cheap-module-source-map',
};

// Export configuration.
export const WebpackDevConfig = merge(WebpackCommonConfig, WebpackConfig);

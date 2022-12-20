const portNumber = 3000; // Port number for the server
const hostName = 'localhost'; // Hostname for the server
const jsFileOutput = 'assets/js/[name].[contenthash].js'; // JavaScript file name once built
const cssFileOutput = '[name].[contenthash].css'; // CSS file name once built

export const config = {
    HOST: hostName,
    PORT: portNumber,
    JS_FILE_OUTPUT: jsFileOutput,
    CSS_FILE_OUTPUT: cssFileOutput,
    IS_DEV: process.env.NODE_ENV === 'development',
};

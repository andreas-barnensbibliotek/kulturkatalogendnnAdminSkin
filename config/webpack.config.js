var webpack = require("webpack");

module.exports = {
    entry: "./_dev/devjs/app.js",
    output: {
        path: __dirname,
        filename: "../_dev/dev_jsbundle/kk_aj_js/kk_aj_MainApp.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

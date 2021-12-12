"use strict";
const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
    },
};
//# sourceMappingURL=webpack.dev.config.js.map
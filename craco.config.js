const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Exclude react-icons from source-map-loader
            webpackConfig.module.rules.forEach(rule => {
                if (rule.loader && rule.loader.includes('source-map-loader')) {
                    rule.exclude = /node_modules\/react-icons/;
                }
            });

            return webpackConfig;
        },
    },
};

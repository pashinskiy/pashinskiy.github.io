const path = require('path');

module.exports = {
    //mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist-webpack'),
      filename: 'index.js'
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      "targets": {
                        "chrome": "35",
                        "ie": "11",
                        "opera": "20",
                        "firefox": "30",
                        "safari": "8"
                      }
                    }
                  ]
                ]
              }
            }
          },
        ],
      },
};

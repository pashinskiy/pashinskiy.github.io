module.exports = {
    mode: 'production',
    output: {
        filename: 'index.js'
    },
    optimization: {
      minimize: false
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
                        "ie": "10",
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

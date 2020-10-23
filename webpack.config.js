module.exports = {
    mode: 'development',
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
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      "targets": {
                        "chrome": "58",
                        "ie": "10"
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

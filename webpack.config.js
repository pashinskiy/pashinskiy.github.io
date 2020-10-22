module.exports = {
    output: {
        filename: 'index.js'
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
      },
};

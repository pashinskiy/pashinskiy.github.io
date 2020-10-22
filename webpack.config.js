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
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
          },
        ],
      },
};

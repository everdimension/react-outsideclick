const pkg = require('./package.json');

module.exports = {
  sections: [
    {
      description: 'Github: https://github.com/everdimension/react-outsideclick',
    },
    {
      components: 'src/index.js',
    },
  ],
  showCode: true,
  showSidebar: false,
  ribbon: {
    url: pkg.repository.url,
    text: 'Fork me on GitHub',
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
  },
};

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  module: {
    resolve: {
      extensions: ['.js', '.vue', '.json', '.ts'],
      alias: {},
    },
    rules: [
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,  // 参考webpack官网配置
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('node_modules/vue-echarts')],
      },
    ],
  },
};

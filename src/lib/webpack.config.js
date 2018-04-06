const Webpack = require('webpack')
const WebpackMerge = require('webpack-merge')
const base_config = require('../../webpack.config.base')()

base_config.module.rules = base_config.module.rules.map(r_ => {
  if (r_.test.toString().includes('.ts')) {
    r_.use = r_.use.map(_ => {
      if (_.loader === 'ts-loader') _.options.configFile = './tsconfig.declaration.json'
      return _
    })
  }
  return r_
})

module.exports = WebpackMerge(base_config, {
  context: `${__dirname}`,
  devtool: false,
  entry: { index: ['./index.ts', 'innersvg-polyfill'] },
  mode: 'development',
  output: { path: `${__dirname}/../../lib`, filename: '[name].js', libraryTarget: 'umd' },
  plugins: [new Webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } })],
})

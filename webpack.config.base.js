const Webpack = require('webpack')
const BuildNotifier = require('webpack-build-notifier')
const PostStylus = require('poststylus')
const Autoprefixer = require('autoprefixer')
const SpritePlugin = require('svg-sprite-loader/lib/plugin')

module.exports = storybook_base_config_ => {
  return {
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'ts-loader',
              options: { appendTsSuffixTo: [/\.vue$/], silent: true },
            },
          ],
        },
        { test: /\.vue$/, use: [{ loader: 'vue-loader' }] },
        {
          test: /\.styl$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { modules: true } },
            { loader: 'stylus-loader' },
          ],
        },
        { test: /\.css$/, use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }] },
        { test: /\.(woff|woff2)$/, use: [{ loader: 'url-loader' }] },
        {
          test: /\.svg$/,
          use: [
            { loader: 'svg-sprite-loader', options: { extract: true } },
            { loader: 'svgo-loader', options: { plugins: [{ removeAttrs: { attrs: 'fill' } }] } },
          ],
        },
      ],
    },
    resolve: { extensions: ['.js', '.ts'], alias: { vue: 'vue/dist/vue.js' } },
    plugins: [
      new SpritePlugin(),
      new Webpack.LoaderOptionsPlugin({
        options: { stylus: { use: [PostStylus([Autoprefixer({ browsers: ['last 2 versions', 'ie >= 11'] })])] } },
      }),
      new BuildNotifier({ title: 'vue-lds', successSound: false, suppressCompileStart: false, onClick: () => null }),
    ],
  }
}

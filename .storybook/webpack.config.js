const WebpackMerge = require('webpack-merge')
const base_config = require('../webpack.config.base')

module.exports = storybook_base_config_ => {
  storybook_base_config_.entry.manager = storybook_base_config_.entry.manager.map(path_ =>
    path_.replace(/addons\.js$/, 'addons.ts'),
  )

  storybook_base_config_.entry.preview = storybook_base_config_.entry.preview.map(path_ =>
    path_.replace(/config\.js$/, 'config.ts'),
  )

  storybook_base_config_.module.rules = storybook_base_config_.module.rules.filter(
    _ => !_.test.toString().match('.vue'),
  )

  return WebpackMerge(base_config(), storybook_base_config_)
}

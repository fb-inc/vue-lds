import { withInfo } from 'storybook-addon-vue-info'
import { text, selectV2 } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Input',
  StoryFunction: withInfo(Styles)(() => {
    const states = selectV2(
      'type',
      {
        '(none)': '(none)',
        static: 'static',
      },
      'static',
    )
    return {
      template: `<vlds-input :label="label" v-model="model" :state="state"></vlds-input>`,
      data: () => ({
        label: text('label', 'Input Label'),
        model: text('model', 'Input'),
        state: states === '(none)' ? undefined : states,
      }),
      methods: { click: () => action('click')('click') },
    }
  }),
}

import { withInfo } from 'storybook-addon-vue-info'
import { boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Form',
  StoryFunction: withInfo(Styles)(() => {
    return {
      template: `<vlds-form :horizontal="horizontal"></vlds-form>`,
      data: () => ({
        horizontal: boolean('horizontal', false),
      }),
      methods: { click: () => action('click')('click') },
    }
  }),
}

import { withInfo } from 'storybook-addon-vue-info'
import { text } from '@storybook/addon-knobs/vue'
import Styles from './styles'

export default {
  story_name: 'Picklist',
  StoryFunction: withInfo(Styles)(() => {
    return {
      template: `<vlds-picklist :placeholder="placeholder"></vlds-picklist>`,
      data: () => ({ placeholder: text('placeholder', 'Select an Option') }),
    }
  }),
}

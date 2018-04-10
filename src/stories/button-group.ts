import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Button Group',
  StoryFunction: withInfo(Styles)(() => {
    return {
      template: `<vlds-button-group>
  <vlds-button type="neutral" @click="click">Refresh</vlds-button>
  <vlds-button type="neutral" @click="click">Edit</vlds-button>
  <vlds-button type="neutral" @click="click">Save</vlds-button>
</vlds-button-group>`,
      data: () => ({
        // icon: icons === '(none)' ? undefined : icons,
        // size: sizes === '(none)' ? undefined : sizes,
        // title: text('title', 'Provide description of action'),
        // type: types === '(none)' ? undefined : types,
        // dropdown: boolean('dropdown', false),
        // disabled: boolean('disabled', false),
      }),
      methods: { click: () => action('click')('click') },
    }
  }),
}

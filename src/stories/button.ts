import { withInfo } from 'storybook-addon-vue-info'
import { text, selectV2, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Button',
  StoryFunction: withInfo(Styles)(() => {
    const types = selectV2(
      'type',
      {
        '(none)': '(none)',
        neutral: 'neutral',
        brand: 'brand',
        inverse: 'inverse',
        destructive: 'destructive',
        success: 'success',
      },
      '(none)',
    )
    const icons = selectV2(
      'icon',
      {
        '(none)': '(none)',
        edit: 'utility/edit',
        delete: 'utility/delete',
      },
      '(none)',
    )

    return {
      template: `<vlds-button :type="type" :icon="icon" :right-icon="right_icon" :disabled="disabled" @click="click">{{ label }}</vlds-button>`,
      data: () => ({
        type: types === '(none)' ? undefined : types,
        icon: icons === '(none)' ? undefined : icons,
        right_icon: boolean('right-icon', false),
        disabled: boolean('disabled', false),
        label: text('label', 'Button'),
      }),
      methods: { click: () => action('click')('click') },
    }
  }),
}

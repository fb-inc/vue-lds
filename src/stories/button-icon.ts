import { withInfo } from 'storybook-addon-vue-info'
import { text, selectV2, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Button Icon',
  StoryFunction: withInfo(Styles)(() => {
    const icons = selectV2(
      'icon',
      {
        settings: 'utility/settings',
        search: 'utility/search',
        like: 'utility/like',
        warning: 'utility/warning',
      },
      'utility/settings',
    )

    const sizes = selectV2(
      'size',
      {
        '(none)': '(none)',
        'x-small': 'x-small',
        small: 'small',
        large: 'large',
      },
      '(none)',
    )

    const types = selectV2(
      'type',
      {
        '(none)': '(none)',
        'border-filled': 'border-filled',
        'bordered-inverse': 'bordered-inverse',
        border: 'border',
        brand: 'brand',
        inverse: 'inverse',
        transparent: 'transparent',
        error: 'error',
      },
      '(none)',
    )
    return {
      template: `<vlds-button-icon :icon="icon" :size="size" :title="title" :type="type" :dropdown="dropdown" :disabled="disabled" @click="click" />`,
      data: () => ({
        icon: icons === '(none)' ? undefined : icons,
        size: sizes === '(none)' ? undefined : sizes,
        title: text('title', 'Provide description of action'),
        type: types === '(none)' ? undefined : types,
        dropdown: boolean('dropdown', false),
        disabled: boolean('disabled', false),
      }),
      methods: { click: () => action('click')('click') },
    }
  }),
}

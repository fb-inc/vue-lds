import { withInfo } from 'storybook-addon-vue-info'
import { selectV2, boolean } from '@storybook/addon-knobs/vue'
import Styles from './styles'

export default {
  story_name: 'Spinner',
  StoryFunction: withInfo(Styles)(() => {
    const types = selectV2(
      'type',
      {
        '(none)': '(none)',
        inverse: 'inverse',
        brand: 'brand',
      },
      '(none)',
    )

    const sizes = selectV2(
      'size',
      {
        'xx-small': 'xx-small',
        'x-small': 'x-small',
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      'medium',
    )
    return {
      template: `<vlds-spinner :type="type" :size="size"></vlds-spinner>`,
      data: () => ({
        type: types === '(none)' ? undefined : types,
        size: sizes,
        delayed: boolean('delayed', false),
      }),
    }
  }),
}

import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, selectV2, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'

import { VldsButton } from '../lib'

import Edit from '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility/edit.svg'
import Delete from '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility/delete.svg'

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo({ styles: { info: { padding: `${8 * 2.5}px` }, header: { h1: { fontSize: `${8 * 3}px` } } } })(() => {
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
          Edit: Edit.url,
          Delete: Delete.url,
        },
        '(none)',
      )
      const aligns = selectV2(
        'icon-align',
        {
          '(none)': '(none)',
          left: 'left',
          right: 'right',
        },
        '(none)',
      )

      return {
        components: { VldsButton },
        template: `<vlds-button
  :type="type"
  :icon="icon"
  :icon-align="icon_align"
  :disabled="disabled"
  @click="click">
  {{ label }}
</vlds-button>`,
        data: () => ({
          type: types === '(none)' ? undefined : types,
          icon: icons === '(none)' ? undefined : icons,
          icon_align: aligns === '(none)' ? undefined : aligns,
          disabled: boolean('disabled', false),
          label: text('label', 'Button'),
        }),
        methods: { click: () => action('click')('click') },
      }
    }),
  )

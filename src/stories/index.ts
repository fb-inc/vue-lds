import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, selectV2, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'

import { VldsButton, VldsModal, VldsSpinner } from '../lib'

import Edit from '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility/edit.svg'
import Delete from '@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility/delete.svg'

const styles = { styles: { info: { padding: `${8 * 2.5}px` }, header: { h1: { fontSize: `${8 * 3}px` } } } }

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add(
    'Button',
    withInfo(styles)(() => {
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

      return {
        components: { VldsButton },
        template: `<vlds-button
  :type="type"
  :icon="icon"
  :right-icon="right_icon"
  :disabled="disabled"
  @click="click">
  {{ label }}
</vlds-button>`,
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
  )
  .add(
    'Modal',
    withInfo(styles)(() => {
      const sizes = selectV2(
        'type',
        {
          '(none)': '(none)',
          medium: 'medium',
          large: 'large',
        },
        '(none)',
      )

      return {
        components: { VldsModal },
        template: `<vlds-modal
  v-if="is_show_modal"
  :title="title"
  :taglines="taglines"
  :footer-directional="footer_directional"
  :size="size"
  @clickClose="clickClose"
  @clickCancel="clickCancel"
  @clickOK="clickOK">
  Modal
</vlds-modal>`,
        data: () => ({
          is_show_modal: true,
          title: text('title', 'Modal Header') || undefined,
          taglines:
            text(
              'taglines',
              'Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show that to you. It is allowed to contain links or be a link.',
            ) || undefined,
          footer_directional: boolean('footer-directional', false),
          size: sizes === '(none)' ? undefined : sizes,
        }),
        methods: {
          clickClose() {
            this.is_show_modal = false
          },
          clickCancel() {
            this.is_show_modal = false
          },
          clickOK() {
            this.is_show_modal = false
          },
        },
      }
    }),
  )
  .add(
    'Spinner',
    withInfo(styles)(() => {
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
        components: { VldsSpinner },
        template: `<vlds-spinner :size="size" :brand="brand"></vlds-spinner>`,
        data: () => ({ size: sizes, brand: boolean('brand', false) }),
      }
    }),
  )

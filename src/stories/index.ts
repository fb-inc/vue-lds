import { Vue } from 'vue-property-decorator'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { withKnobs, text, selectV2, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'

import Vlds from '../lib'

Vue.use(Vlds)

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
          edit: 'utility/edit',
          delete: 'utility/delete',
        },
        '(none)',
      )

      return {
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
    'Button Icon',
    withInfo(styles)(() => {
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
  )
  .add(
    'Form',
    withInfo(styles)(() => {
      return {
        template: `<vlds-form :horizontal="horizontal"></vlds-form>`,
        data: () => ({
          horizontal: boolean('horizontal', false),
        }),
        methods: { click: () => action('click')('click') },
      }
    }),
  )
  .add(
    'Input',
    withInfo(styles)(() => {
      const states = selectV2(
        'type',
        {
          '(none)': '(none)',
          static: 'static',
        },
        'static',
      )
      return {
        template: `<vlds-input
  :label="label"
  v-model="model"
  :state="state"></vlds-input>`,
        data: () => ({
          label: text('label', 'Input Label'),
          model: text('model', 'Input'),
          state: states === '(none)' ? undefined : states,
        }),
        methods: { click: () => action('click')('click') },
      }
    }),
  )
  .add(
    'Modal',
    withInfo(styles)(() => {
      const sizes = selectV2(
        'size',
        {
          '(none)': '(none)',
          medium: 'medium',
          large: 'large',
        },
        '(none)',
      )

      return {
        template: `<vlds-modal v-if="is_show_modal" :title="title" :taglines="taglines" :size="size" @clickBackdrop="clickBackdrop" @clickClose="clickClose">
  <vlds-modal-content>{{ content }}</vlds-modal-content>
  <vlds-modal-footer v-if="is_show_footer" :footer-directional="footer_directional">
    <vlds-button type="neutral" @click="clickCancel">Cancel</vlds-button>
    <vlds-button type="brand" @click="clickDone">Done</vlds-button>
  </vlds-modal-footer>
</vlds-modal>`,
        data: () => ({
          is_show_modal: boolean('is_show_modal', true),
          title: text('title', 'Modal Header') || undefined,
          taglines:
            text(
              'taglines',
              'Here’s a tagline if you need it. It is allowed to extend across mulitple lines, so I’m making up content to show that to you. It is allowed to <a>contain links or be a link</a>.',
            ) || undefined,
          is_show_footer: boolean('is_show_footer', true),
          footer_directional: boolean('footer-directional', false),
          size: sizes === '(none)' ? undefined : sizes,
          content: text('content', 'Content'),
        }),
        methods: {
          clickBackdrop: () => {},
          clickClose: () => {},
          clickCancel: () => {},
          clickDone: () => {},
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
        template: `<vlds-spinner :size="size" :brand="brand"></vlds-spinner>`,
        data: () => ({ size: sizes, brand: boolean('brand', false) }),
      }
    }),
  )

import { withInfo } from 'storybook-addon-vue-info'
import { text, selectV2, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Modal',
  StoryFunction: withInfo(Styles)(() => {
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
      template: `<vlds-modal
  v-if="is_show_modal"
  :title="title"
  :taglines="taglines"
  :size="size"
  :footer-directional="footer_directional"
  @clickBackdrop="click"
  @clickClose="click">
  <template slot="content">{{ content }}</template>
  <template slot="footer" v-if="is_show_footer">
    <vlds-button type="neutral" @click="click">Cancel</vlds-button>
    <vlds-button type="brand" @click="click">Done</vlds-button>
  </template>
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
        click: () => action('click')('click'),
      },
    }
  }),
}

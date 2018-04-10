import { withInfo } from 'storybook-addon-vue-info'
import { text, boolean } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Menu',
  StoryFunction: withInfo(Styles)(() => {
    const left_icon = boolean('left_icon', false)
    const right_icon = boolean('right_icon', false)
    return {
      template: `<vlds-menu :title="title" :items="items" @select="select"></vlds-menu>`,
      data: () => ({
        title: text('title', 'Show More'),
        items: [
          {
            left_icon: left_icon ? 'utility/user' : undefined,
            right_icon: right_icon ? 'utility/table' : undefined,
            label: 'Menu Item One',
            value: 0,
          },
          {
            left_icon: left_icon ? 'utility/user' : undefined,
            right_icon: right_icon ? 'utility/table' : undefined,
            label: 'Menu Item Two',
            value: 1,
          },
          {
            left_icon: left_icon ? 'utility/user' : undefined,
            right_icon: right_icon ? 'utility/table' : undefined,
            label: 'Menu Item Three',
            value: 2,
          },
          null,
          {
            left_icon: left_icon ? 'utility/user' : undefined,
            right_icon: right_icon ? 'utility/table' : undefined,
            label: 'Menu Item Four',
            value: 3,
          },
        ],
      }),
      methods: {
        select: _ => action('click')(_),
      },
    }
  }),
}

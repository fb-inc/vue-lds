import { withInfo } from 'storybook-addon-vue-info'
import { text, boolean, selectV2 } from '@storybook/addon-knobs/vue'
import { action } from '@storybook/addon-actions'
import Styles from './styles'

export default {
  story_name: 'Dropdown',
  StoryFunction: withInfo(Styles)(() => {
    const items = [] as { left_icon?: string; right_icon?: string; label: string | null; value?: any }[]
    const sub_header = text('Sub header', 'Menu Sub Heading')
    if (sub_header !== '') {
      items.push({ label: sub_header })
    }

    const left_icon = boolean('left_icon', false)
    const right_icon = boolean('right_icon', false)

    items.push(
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item One',
        value: 1,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Two',
        value: 2,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Three',
        value: 3,
      },
    )

    if (boolean('Separator', true)) {
      items.push({ label: null })
    }

    items.push(
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Four',
        value: 4,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Five',
        value: 5,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Six',
        value: 6,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Seven',
        value: 7,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Eight',
        value: 8,
      },
      {
        left_icon: left_icon ? 'utility/user' : undefined,
        right_icon: right_icon ? 'utility/table' : undefined,
        label: 'Menu Item Nine',
        value: 9,
      },
    )

    const scrolls = selectV2(
      'scroll',
      {
        '(none)': '(none)',
        small: 'small',
        medium: 'medium',
        large: 'large',
      },
      '(none)',
    )

    return {
      template: `<vlds-dropdown :title="title" :items="items" :scroll="scroll" @select="select"></vlds-dropdown>`,
      data: () => ({
        title: text('title', 'Show More'),
        items,
        scroll: scrolls === '(none)' ? undefined : scrolls,
      }),
      methods: {
        select: _ => action('click')(_),
      },
    }
  }),
}

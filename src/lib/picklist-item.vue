
<style lang="stylus" scoped>

@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
li.slds-listbox__item(role='presentation')
  .slds-media.slds-listbox__option.slds-listbox__option_plain.slds-media_small.slds-media_center(role='option')
    span.slds-media__figure
      svg.slds-icon.slds-icon_x-small.slds-listbox__icon-selected(aria-hidden='true')
        use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#check')
    span.slds-media__body
      span.slds-truncate(title='Option A')  Option A

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  down_icon = require('@salesforce-ux/design-system/assets/icons/utility/down.svg')

  @Prop({ type: String })
  placeholder: string | undefined
}
</script>

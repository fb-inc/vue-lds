<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
.demo-only(style='height: 640px;')
  section.slds-modal.slds-fade-in-open(role='dialog', tabindex='-1', aria-labelledby='modal-heading-01', aria-modal='true', aria-describedby='modal-content-id-1')
    .slds-modal__container
      header.slds-modal__header
        button.slds-button.slds-button_icon.slds-modal__close.slds-button_icon-inverse(title='Close')
          svg.slds-button__icon.slds-button__icon_large(aria-hidden='true')
            use(xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#close', xmlns:xlink='http://www.w3.org/1999/xlink')
          span.slds-assistive-text Close
        h2#modal-heading-01.slds-text-heading_medium.slds-hyphenate Modal Header
      #modal-content-id-1.slds-modal__content.slds-p-around_medium
        p
          | Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          | quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.
        p
          | Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
          | ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.
      footer.slds-modal__footer
        vlds-button(type="neutral" @click="$listeners.clickCancel()") Cancel
        vlds-button(type="brand"  @click="$listeners.clickOK()") Save
  .slds-backdrop.slds-backdrop_open
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import VldsButton from './button.vue'

@Component({ components: { VldsButton } })
export default class extends Vue {
  @Prop({ type: Function })
  clickCancel: () => void | undefined

  @Prop({ type: Function })
  clickOK: () => void | undefined
}
</script>

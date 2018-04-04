<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
div
  section.slds-modal.slds-fade-in-open(
    :class="{ [`slds-modal_${size}`]: size != null }"
    ole="dialog"
    tabindex="-1"
    :aria-labelledby="title == null ? undefined : 'modal-heading-01'"
    aria-modal="true"
    aria-describedby="modal-content-id-1"
  )
    .slds-modal__container
      header.slds-modal__header(:class="{ 'slds-modal__header_empty': title == null }")
        button.slds-button.slds-button_icon.slds-modal__close.slds-button_icon-inverse(
          v-if="$listeners.clickClose != null"
          title="Close"
          @click="$listeners.clickClose()"
        )
          svg.slds-button__icon.slds-button__icon_large(aria-hidden="true")
            use(:xlink:href="close_icon_url")
          span.slds-assistive-text Close
        h2#modal-heading-01.slds-text-heading_medium.slds-hyphenate(v-if="title != null") {{ title }}
        p.slds-m-top_x-small(v-if="taglines != null") {{ taglines }}
      #modal-content-id-1.slds-modal__content.slds-p-around_medium
        p
          | Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore
          | quis aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.
        p
          | Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
          | ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.
      footer.slds-modal__footer(
        v-if="$listeners.clickCancel != null || $listeners.clickOK != null"
        :class="{ 'slds-modal__footer_directional': footerDirectional }"
      )
        vlds-button(v-if="$listeners.clickCancel != null" type="neutral" @click="$listeners.clickCancel()") Cancel
        vlds-button(v-if="$listeners.clickOK != null" type="brand"  @click="$listeners.clickOK()") Save
  .slds-backdrop.slds-backdrop_open
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import VldsButton from './button.vue'

@Component({ components: { VldsButton } })
export default class extends Vue {
  close_icon_url = require('@salesforce-ux/icons/dist/salesforce-lightning-design-system-icons/utility/close.svg')
    .default.url

  @Prop({ type: String })
  title: string | undefined

  @Prop({ type: String })
  taglines: string | undefined

  @Prop({ type: Boolean })
  footerDirectional: boolean

  @Prop({ type: String })
  size: string | undefined

  @Prop({ type: Function })
  clickClose: () => void | undefined

  @Prop({ type: Function })
  clickCancel: () => void | undefined

  @Prop({ type: Function })
  clickOK: () => void | undefined
}
</script>

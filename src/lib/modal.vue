<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
div
  section.slds-modal.slds-fade-in-open(
    :class="{ [`slds-modal_${size}`]: size != null }"
    role="dialog"
    tabindex="-1"
    :aria-labelledby="title == null ? undefined : 'modal-heading-01'"
    aria-modal="true"
    aria-describedby="modal-content-id-1"
    @click="clickSection"
  )
    .slds-modal__container
      header.slds-modal__header(:class="{ 'slds-modal__header_empty': title == null }")
        button.slds-button.slds-button_icon.slds-modal__close.slds-button_icon-inverse(
          v-if="$listeners.clickClose != null"
          title="Close"
          @click="$listeners.clickClose()"
        )
          svg.slds-button__icon.slds-button__icon_large(aria-hidden="true" v-html="close_icon")
          span.slds-assistive-text Close
        h2#modal-heading-01.slds-text-heading_medium.slds-hyphenate(v-if="title != null") {{ title }}
        p.slds-m-top_x-small(v-if="taglines != null") {{ taglines }}
      #modal-content-id-1.slds-modal__content.slds-p-around_medium: slot
      footer.slds-modal__footer(
        v-if="$listeners.clickSecondary != null || $listeners.clickPrimary != null"
        :class="{ 'slds-modal__footer_directional': footerDirectional }"
      )
        vlds-button(v-if="$listeners.clickSecondary != null" type="neutral" @click="$listeners.clickSecondary()") {{ labelSecondary || 'Cancel' }}
        vlds-button(v-if="$listeners.clickPrimary != null" type="brand"  @click="$listeners.clickPrimary()") {{ labelPrimary || 'Done' }}
  .slds-backdrop.slds-backdrop_open
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import VldsButton from './button.vue'

@Component({ components: { VldsButton } })
export default class extends Vue {
  close_icon = require('@salesforce-ux/design-system/assets/icons/utility/close.svg')

  @Prop({ type: String })
  title: string | undefined

  @Prop({ type: String })
  taglines: string | undefined

  @Prop({ type: Boolean })
  footerDirectional: boolean

  @Prop({ type: String })
  size: string | undefined

  @Prop({ type: String })
  labelSecondary: string | undefined

  @Prop({ type: String })
  labelPrimary: string | undefined

  @Prop({ type: Function })
  clickBackdrop: () => void | undefined

  @Prop({ type: Function })
  clickClose: () => void | undefined

  @Prop({ type: Function })
  clickSecondary: () => void | undefined

  @Prop({ type: Function })
  clickPrimary: () => void | undefined

  clickSection(_: MouseEvent) {
    if (
      (_.target as Element).className.split(' ').find(_ => _ === 'slds-modal') &&
      this.$listeners.clickBackdrop != null
    ) {
      ;(this.$listeners.clickBackdrop as Function)()
    }
  }
}
</script>

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
        vlds-button-icon(icon="utility/close" size="large" title="Close" type="modal")
        h2#modal-heading-01.slds-text-heading_medium.slds-hyphenate(v-if="title != null") {{ title }}
        p.slds-m-top_x-small(v-if="taglines != null" v-html="taglines")
      slot
  .slds-backdrop.slds-backdrop_open
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  close_icon = require('@salesforce-ux/design-system/assets/icons/utility/close.svg')

  @Prop({ type: String })
  title: string | undefined

  @Prop({ type: String })
  taglines: string | undefined

  @Prop({ type: String })
  size: string | undefined

  @Prop({ type: Function })
  clickBackdrop: () => void | undefined

  @Prop({ type: Function })
  clickClose: () => void | undefined

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

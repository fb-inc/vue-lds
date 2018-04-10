<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
button.slds-button.slds-button_icon(
  :class="[_type, { 'slds-modal__close': type === 'modal', 'slds-button_icon-container-more': dropdown }]"
  :title="title"
  :disabled="disabled"
  @click="$listeners.click()"
)
  svg.slds-button__icon(:class="{ [`slds-button__icon_${size}`]: size != null }" aria-hidden="true" v-html="icon_data")
  svg.slds-button__icon.slds-button__icon_x-small(
    v-if="dropdown"
    :class="{ [`slds-button__icon_${size}`]: size != null }"
    aria-hidden="true"
    v-html="down"
  )
  span.slds-assistive-text(v-if="title != null") {{ title }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String })
  icon: string | undefined

  @Prop({ type: String })
  size: string | undefined

  @Prop({ type: String })
  title: string | undefined

  @Prop({ type: String })
  type: string | undefined

  @Prop({ type: Boolean })
  dropdown: boolean

  @Prop({ type: Boolean })
  disabled: boolean

  down = require(`@salesforce-ux/design-system/assets/icons/utility/down.svg`)

  get icon_data() {
    return require(`@salesforce-ux/design-system/assets/icons/${this.icon}.svg`)
  }

  get _type() {
    if (this.type === 'bordered-inverse') return 'slds-button_icon-container slds-button_icon-border-inverse'
    if (this.type === 'transparent') return 'slds-button_icon-container'
    if (this.type === 'modal') return 'slds-button_icon-inverse'
    return `slds-button_icon-${this.type}`
  }
}
</script>

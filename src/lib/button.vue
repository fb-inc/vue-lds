<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
button.slds-button(:class="{ [`slds-button_${type}`]: type != null }" :disabled="disabled" @click="$listeners.click()")
  template(v-if="icon != null && (iconAlign == null || iconAlign === 'left')")
    svg.slds-button__icon.slds-button__icon_left(aria-hidden="true")
      use(:xlink:href="icon")
  slot
  template(v-if="icon != null && iconAlign === 'right'")
    svg.slds-button__icon.slds-button__icon_right(aria-hidden="true")
      use(:xlink:href="icon")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String })
  type: string | undefined

  @Prop({ type: String })
  icon: string | undefined

  @Prop({ type: String })
  iconAlign: string | undefined

  @Prop({ type: Boolean })
  disabled: boolean
}
</script>

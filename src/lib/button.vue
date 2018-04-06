<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
button.slds-button(:class="{ [`slds-button_${type}`]: type != null }" :disabled="disabled" @click="$listeners.click()")
  svg.slds-button__icon.slds-button__icon_left(v-if="icon != null && !rightIcon" aria-hidden="true" v-html="icon_data")
  slot
  svg.slds-button__icon.slds-button__icon_right(v-if="icon != null && rightIcon" aria-hidden="true" v-html="icon_data")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String })
  type: string | undefined

  @Prop({ type: String })
  icon: string | undefined

  @Prop({ type: Boolean })
  rightIcon: boolean

  @Prop({ type: Boolean })
  disabled: boolean

  get icon_data() {
    return require(`@salesforce-ux/design-system/assets/icons/${this.icon}.svg`)
  }
}
</script>

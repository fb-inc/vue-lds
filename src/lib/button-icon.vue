<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
button.slds-button.slds-button_icon(
  :class="{ [`slds-button_icon-${type === 'modal' ? 'inverse' : type }`]: type != null, 'slds-modal__close': type === 'modal' }"
  :title="title"
  :disabled="disabled"
  @click="$listeners.click()"
)
  svg.slds-button__icon(:class="{ [`slds-button__icon_${size}`]: size != null }" aria-hidden="true" v-html="icon_data")
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
  disabled: boolean

  get icon_data() {
    return require(`@salesforce-ux/design-system/assets/icons/${this.icon}.svg`)
  }
}
</script>

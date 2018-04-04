<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
.slds-spinner(:class="{ [`slds-spinner_${size}`]: size != null, [`slds-spinner_brand`]: brand }" role="status")
  span.slds-assistive-text Loading
  .slds-spinner__dot-a
  .slds-spinner__dot-b
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String })
  size: string | undefined

  @Prop({ type: Boolean })
  brand: boolean
}
</script>


<style lang="stylus" scoped>

@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
footer.slds-modal__footer(:class="{ 'slds-modal__footer_directional': footerDirectional }"): slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: Boolean })
  footerDirectional: boolean
}
</script>

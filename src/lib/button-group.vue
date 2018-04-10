
<style lang="stylus" scoped>

@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
.slds-button-group(role='group')
  slot
  .slds-dropdown-trigger.slds-dropdown-trigger_click.slds-button_last
    vlds-button-icon(type="border-filled" title="Show More" icon="utility/down")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  // @Prop({ type: String })
  // icon: string | undefineda
}
</script>

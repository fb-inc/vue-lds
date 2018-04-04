<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
.slds-form(:class="`slds-form_${horizontal ? 'horizontal' : 'stacked'}`")
  slot
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: Boolean })
  horizontal: string | undefined
}
</script>

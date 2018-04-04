<style lang="stylus" scoped>
@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
.slds-form-element
  span.slds-form-element__label(v-if="state === 'static'") {{ label }}
  .slds-form-element__control
    span.slds-form-element__static(v-if="state === 'static'") {{ value }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop({ type: String })
  label: string | undefined

  @Prop({ type: String })
  value: string

  @Prop({ type: String })
  state: string | undefined

  get model() {
    return this.value
  }

  set model(_) {
    this.$emit('input', _)
  }
}
</script>

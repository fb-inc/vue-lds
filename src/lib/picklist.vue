
<style lang="stylus" scoped>

@import '~@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css'
</style>

<template lang="pug">
.slds-form-element__control
  .slds-combobox_container.slds-size_small
    .slds-combobox.slds-dropdown-trigger.slds-dropdown-trigger_click.slds-combobox-picklist(aria-expanded='false', aria-haspopup='listbox', role='combobox')
      .slds-combobox__form-element.slds-input-has-icon.slds-input-has-icon_right(role='none')
        input#combobox-unique-id-2.slds-input.slds-combobox__input(type='text', aria-controls='listbox-unique-id', autocomplete='off', role='textbox', :placeholder='placeholder', readonly='')
        span.slds-icon_container.slds-icon-utility-down.slds-input__icon.slds-input__icon_right(title='Description of icon when needed')
          svg.slds-icon.slds-icon.slds-icon_x-small.slds-icon-text-default(aria-hidden='true' v-html="down_icon")
          span.slds-assistive-text Description of icon when needed
      #listbox-unique-id(role='listbox')
        ul.slds-listbox.slds-listbox_vertical.slds-dropdown.slds-dropdown_fluid(role='presentation')
          li.slds-listbox__item(role='presentation')
            #listbox-option-unique-id-01.slds-media.slds-listbox__option.slds-listbox__option_plain.slds-media_small.slds-media_center(role='option')
              span.slds-media__figure
                svg.slds-icon.slds-icon_x-small.slds-listbox__icon-selected(aria-hidden='true')
                  use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#check')
              span.slds-media__body
                span.slds-truncate(title='Option A')  Option A
          li.slds-listbox__item(role='presentation')
            #listbox-option-unique-id-02.slds-media.slds-listbox__option.slds-listbox__option_plain.slds-media_small.slds-media_center(role='option')
              span.slds-media__figure
                svg.slds-icon.slds-icon_x-small.slds-listbox__icon-selected(aria-hidden='true')
                  use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#check')
              span.slds-media__body
                span.slds-truncate(title='Option B')  Option B
          li.slds-listbox__item(role='presentation')
            #listbox-option-unique-id-03.slds-media.slds-listbox__option.slds-listbox__option_plain.slds-media_small.slds-media_center(role='option')
              span.slds-media__figure
                svg.slds-icon.slds-icon_x-small.slds-listbox__icon-selected(aria-hidden='true')
                  use(xmlns:xlink='http://www.w3.org/1999/xlink', xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#check')
              span.slds-media__body
                span.slds-truncate(title='Option ABCDEFGHIJKLMNOPQRSTUVWXYZ')  Option ABCDEFGHIJKLMNOPQRSTUVWXYZ

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  down_icon = require('@salesforce-ux/design-system/assets/icons/utility/down.svg')

  @Prop({ type: String })
  placeholder: string | undefined
}
</script>

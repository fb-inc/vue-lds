import VldsButton from './button.vue'
import VldsButtonGroup from './button-group.vue'
import VldsButtonIcon from './button-icon.vue'
import VldsDropdown from './dropdown.vue'
import VldsForm from './form.vue'
import VldsInput from './input.vue'
import VldsModal from './modal.vue'
import VldsSpinner from './spinner.vue'

export default {
  install: Vue => {
    Vue.component('vlds-button-group', VldsButtonGroup)
    Vue.component('vlds-button-icon', VldsButtonIcon)
    Vue.component('vlds-button', VldsButton)
    Vue.component('vlds-dropdown', VldsDropdown)
    Vue.component('vlds-form', VldsForm)
    Vue.component('vlds-input', VldsInput)
    Vue.component('vlds-modal', VldsModal)
    Vue.component('vlds-spinner', VldsSpinner)
  },
}

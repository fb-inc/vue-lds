import VldsButtonGroup from './button-group.vue'
import VldsButtonIcon from './button-icon.vue'
import VldsButton from './button.vue'
import VldsForm from './form.vue'
import VldsInput from './input.vue'
import VldsMenu from './menu.vue'
import VldsModal from './modal.vue'
import VldsSpinner from './spinner.vue'

const VLDS = {
  install: Vue => {
    Vue.component('vlds-button', VldsButton)
    Vue.component('vlds-button-group', VldsButtonGroup)
    Vue.component('vlds-button-icon', VldsButtonIcon)
    Vue.component('vlds-form', VldsForm)
    Vue.component('vlds-input', VldsInput)
    Vue.component('vlds-menu', VldsMenu)
    Vue.component('vlds-modal', VldsModal)
    Vue.component('vlds-spinner', VldsSpinner)
  },
}

export default VLDS

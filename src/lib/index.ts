import VldsButton from './button.vue'
import VldsButtonIcon from './button-icon.vue'
import VldsForm from './form.vue'
import VldsInput from './input.vue'
import VldsModal from './modal.vue'
import VldsModalContent from './modal-content.vue'
import VldsModalFooter from './modal-footer.vue'
import VldsSpinner from './spinner.vue'

const VLDS = {
  install: Vue => {
    Vue.component('vlds-button', VldsButton)
    Vue.component('vlds-button-icon', VldsButtonIcon)
    Vue.component('vlds-form', VldsForm)
    Vue.component('vlds-input', VldsInput)
    Vue.component('vlds-modal', VldsModal)
    Vue.component('vlds-modal-content', VldsModalContent)
    Vue.component('vlds-modal-footer', VldsModalFooter)
    Vue.component('vlds-spinner', VldsSpinner)
  },
}

export default VLDS

import { Vue } from 'vue-property-decorator'
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'

import Button from './button'
import ButtonGroup from './button-group'
import ButtonIcon from './button-icon'
import Dropdown from './dropdown'
import Form from './form'
import Input from './input'
import Modal from './modal'
import Spinner from './spinner'
import VueLDS from '../lib'

Vue.use(VueLDS)

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add(Button.story_name, Button.StoryFunction)
  .add(ButtonGroup.story_name, ButtonGroup.StoryFunction)
  .add(ButtonIcon.story_name, ButtonIcon.StoryFunction)
  .add(Dropdown.story_name, Dropdown.StoryFunction)
  .add(Form.story_name, Form.StoryFunction)
  .add(Input.story_name, Input.StoryFunction)
  .add(Modal.story_name, Modal.StoryFunction)
  .add(Spinner.story_name, Spinner.StoryFunction)

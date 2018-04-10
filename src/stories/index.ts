import { Vue } from 'vue-property-decorator'
import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs/vue'

import Vlds from '../lib'
import Button from './button'
import ButtonGroup from './button-group'
import ButtonIcon from './button-icon'
import Form from './form'
import Input from './input'
import Modal from './modal'
import Picklist from './picklist'
import Spinner from './spinner'

Vue.use(Vlds)

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add(Button.story_name, Button.StoryFunction)
  .add(ButtonGroup.story_name, ButtonGroup.StoryFunction)
  .add(ButtonIcon.story_name, ButtonIcon.StoryFunction)
  .add(Form.story_name, Form.StoryFunction)
  .add(Input.story_name, Input.StoryFunction)
  .add(Modal.story_name, Modal.StoryFunction)
  .add(Picklist.story_name, Picklist.StoryFunction)
  .add(Spinner.story_name, Spinner.StoryFunction)

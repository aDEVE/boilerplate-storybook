import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import Button from '..'

const stories = storiesOf('Button', module)

stories.add('Button 1', () => (
  <Button onClick={action('Click')}>{text('Label', "Click me i'm famous")}</Button>
))

import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemesProvider } from 'storybook-addon-styled-component-theme'
import styled from 'styled-components'
import dark from '../src/components/theme/darkTheme'
import light from '../src/components/theme/lightTheme'
import { colors } from '../src/components/theme/styles'

setOptions({
  addonPanelInRight: true,
  hierarchyRootSeparator: /\|/,
  hierarchySeparator: /\//,
  name: 'Storybook',
  sortStoriesByKind: true,
})

addDecorator(withKnobs)

const Container = styled.div`
  background-color: ${({ theme }) => theme.containerColor};
  padding: 16px;
`

const themes = [
  {
    ...light,
    containerColor: colors.white,
    name: 'Light',
  },
  {
    ...dark,
    containerColor: colors.black,
    name: 'Dark',
  },
]

addDecorator(story => (
  <ThemesProvider themes={themes}>
    <Container>{story()}</Container>
  </ThemesProvider>
))

const req = require.context('../src/components', true, /\/stories\/index\.js$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

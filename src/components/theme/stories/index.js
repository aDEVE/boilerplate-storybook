import React, { Component } from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { keys, map, toUpper } from 'lodash'
import { colors } from '../styles'
import lightTheme from '../lightTheme'

const stories = storiesOf('Global|Themes', module)

stories.add('colors', () => <Colors />)

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  padding: 8px;
`

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`

const Square = styled.div`
  margin-right: '16px';
  display: block;
  width: 30px;
  height: 30px;
  background-color: ${({ color, theme }) => theme.colors[color] || color};
  border-radius: 50%;
  border: 1px solid #e0e0e0;
`

const colorsKeys = keys(colors)

class Colors extends Component {
  render() {
    return (
      <Container>
        {map(colorsKeys, k => (
          <ColorContainer key={k}>
            <Square color={k} />
            <p style={{ padding: '0 16px' }}>{k}</p>
            <p style={{ fontWeight: 600 }}>{toUpper(lightTheme.colors[k])}</p>
          </ColorContainer>
        ))}
      </Container>
    )
  }
}

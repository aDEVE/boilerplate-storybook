import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEqual, merge } from 'lodash'
import { ThemeProvider as TP, withTheme } from 'styled-components'

import { darkComponents, lightComponents } from '../theme/styles'

/**
 * A component which may be used to override partial parts of the theme.
 * Just pass the partial theme into otherTheme and it will be merged with the actual one.
 */
class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    otherTheme: PropTypes.object,
    theme: PropTypes.object,
  }

  static defaultProps = {
    dark: false,
    light: true,
    otherTheme: {},
    theme: {},
  }

  static calculateTheme(props) {
    const { dark, light, otherTheme, theme } = props

    return merge(
      {},
      theme || {},
      otherTheme || {},
      light ? { components: lightComponents } : {},
      dark ? { components: darkComponents } : {},
    )
  }

  state = {
    theme: ThemeProvider.calculateTheme(this.props),
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { dark, light, otherTheme, theme } = nextProps

    if (
      light !== prevState.light ||
      dark !== prevState.dark ||
      !isEqual(otherTheme, prevState.otherTheme) ||
      !isEqual(theme, prevState.theme)
    ) {
      return {
        dark,
        light,
        otherTheme,
        theme: ThemeProvider.calculateTheme(nextProps),
      }
    }

    return null
  }

  render() {
    const { children, theme: propTheme } = this.props
    const { theme } = this.state

    return <TP theme={theme || propTheme}>{children}</TP>
  }
}

export default withTheme(ThemeProvider)

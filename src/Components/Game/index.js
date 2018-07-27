import React, { Component } from 'react'

import Grid from 'Components/Grid'
import { Consumer } from 'Store'

class Game extends Component {
  render() {
    const { cells, rowsSize } = this.props

    return <Grid cells={cells} size={rowsSize} />
  }

  componentDidMount() {
    this.props.startGame()
  }
}

export default Consumer(Game)

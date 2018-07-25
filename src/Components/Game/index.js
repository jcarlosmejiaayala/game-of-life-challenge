import React, { Component, Fragment } from 'react'

import Grid from 'Components/Grid'
import { Consumer } from 'Store'

class Game extends Component {
  render() {
    const { cells, rowsSize } = this.props

    return (
      <Fragment>
        {cells.length && <Grid cells={cells} size={rowsSize} />}
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.startGame()
  }
}

export default Consumer(Game)

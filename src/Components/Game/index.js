import React, { Component, Fragment } from 'react'

import GameDashboard from 'Components/GameDashboard'
import GameOptions from 'Components/GameOptions'
import Grid from 'Components/Grid'
import StyledTitle from 'Styled/StyledTitle'
import { Consumer } from 'Store'

class Game extends Component {
  render() {
    const {
      cells,
      countLivingCells,
      createAndSetInitialSetOfAliveCells,
      handleOnStartGame,
      handleOnSwitchLiveness,
      handleOnUpdateGameStatus,
      handleOnUpdateTimeout,
      notStarted,
      period,
      rowsSize,
      selectedTabIndex,
      updateCellLifecycle,
      timeout
    } = this.props

    return (
      <Fragment>
        <StyledTitle>Game of life challenge</StyledTitle>
        <GameDashboard>
          <GameOptions
            countLivingCells={countLivingCells}
            createAndSetInitialSetOfAliveCells={
              createAndSetInitialSetOfAliveCells
            }
            handleOnUpdateGameStatus={handleOnUpdateGameStatus}
            handleOnUpdateTimeout={handleOnUpdateTimeout}
            isNotStarted={notStarted}
            onStartGame={handleOnStartGame}
            period={period}
            selectedTabIndex={selectedTabIndex}
            updateCellLifecycle={updateCellLifecycle}
            timeout={timeout}
          />
          <Grid
            cells={cells}
            size={rowsSize}
            switchLiveness={handleOnSwitchLiveness}
          />
        </GameDashboard>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.createAndSetInitialSetOfAliveCells()
  }
}

export default Consumer(Game)

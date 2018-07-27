import React, { Component } from 'react'

import UpdateTimeout from 'Components/UpdateTimeout'
import { TabIndex, TabList, TabPanel, Tabs } from 'Components/Tab'
import StyledGameOptions from 'Styled/StyledGameOptions'
import StyledLivingCellsCounter from 'Styled/StyledLivingCellsCounter'
import StyledNextLifecycleButton from 'Styled/StyledNextLifecycleButton'
import StyledStartGameButton from 'Styled/StyledStartGameButton'
import StyledTabsWrapper from 'Styled/StyledTabsWrapper'

class GameOptions extends Component {
  handleOnStartOrRestartGameClick = () => {
    const {
      createAndSetInitialSetOfAliveCells,
      isNotStarted,
      onStartGame,
      selectedTabIndex
    } = this.props

    if (isNotStarted) {
      const gameStatus = !selectedTabIndex ? 'AUTOMATIC' : 'MANUAL'
      onStartGame(gameStatus)
    } else {
      createAndSetInitialSetOfAliveCells()
    }
  }

  render() {
    const {
      countLivingCells,
      handleOnUpdateGameStatus,
      handleOnUpdateTimeout,
      isNotStarted,
      period,
      updateCellLifecycle,
      timeout
    } = this.props

    return (
      <StyledGameOptions>
        <StyledLivingCellsCounter existsLivingCells={!!countLivingCells}>
          <h3>Living cells:</h3>
          {` ${countLivingCells}`}
        </StyledLivingCellsCounter>

        <StyledLivingCellsCounter existsLivingCells={!!countLivingCells}>
          <h3>Life counter:</h3>
          {` ${period}`}
        </StyledLivingCellsCounter>

        <StyledTabsWrapper>
          <Tabs>
            <TabList>
              <TabIndex
                text="Normal"
                whenCurrentTabIsSelectedCB={handleOnUpdateGameStatus(
                  'AUTOMATIC'
                )}
              />
              <TabIndex
                text="Manual"
                whenCurrentTabIsSelectedCB={handleOnUpdateGameStatus('MANUAL')}
              />
            </TabList>
            <TabList>
              <TabPanel>
                Updates lifecycles time automatically given the following
                interval
                <UpdateTimeout
                  timeout={timeout}
                  onUpdateTimeout={handleOnUpdateTimeout}
                />
              </TabPanel>
              <TabPanel>
                <StyledNextLifecycleButton onClick={updateCellLifecycle}>
                  Next Lifecycle step
                </StyledNextLifecycleButton>
              </TabPanel>
            </TabList>
          </Tabs>
        </StyledTabsWrapper>

        <StyledStartGameButton onClick={this.handleOnStartOrRestartGameClick}>
          {isNotStarted ? 'start' : 'restart'} game
        </StyledStartGameButton>
      </StyledGameOptions>
    )
  }
}

export default GameOptions

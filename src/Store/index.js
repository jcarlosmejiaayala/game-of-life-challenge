/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-nested-ternary */

import React, { Component, createContext } from 'react'

const GAME_STATUS = {
  MANUAL: 1,
  AUTOMATIC: 2
}

const DEFAULT_STATE = {
  cells: [],
  countLivingCells: 0,
  gameStatus: GAME_STATUS.AUTOMATIC,
  notStarted: true,
  isEnded: false,
  period: 0,
  rowsSize: 50,
  selectedTabIndex: 0,
  timeout: 4000
}

const Context = createContext(DEFAULT_STATE)

const create2DArray = rows =>
  [...Array(rows)].map(() => Array(rows).fill(false))

const delay = timeout =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })

const countNeighbors = (grid, rowsSize, x, y) => {
  let sum = 0

  for (let i = -1; i < 2; i += 1) {
    for (let j = -1; j < 2; j += 1) {
      const col = (x + i + rowsSize) % rowsSize
      const row = (y + j + rowsSize) % rowsSize

      sum += grid[col][row]
    }
  }

  sum -= grid[x][y]

  return sum
}

export const Consumer = Mixin =>
  class extends Component {
    render() {
      return (
        <Context.Consumer>
          {context => <Mixin {...this.props} {...context} />}
        </Context.Consumer>
      )
    }
  }
export class Provider extends Component {
  state = DEFAULT_STATE

  createAndSetInitialSetOfAliveCells = () => {
    const { rowsSize } = this.state

    const cells = create2DArray(rowsSize)

    cells[0][0] = true
    cells[0][1] = true
    cells[1][0] = true
    cells[1][3] = true
    cells[2][1] = true
    cells[2][2] = true

    this.setState({ cells, countLivingCells: 6, period: 0 })
  }

  updateCellLifecycle = (isGameLooping = false) => {
    this.setState(
      ({ rowsSize, cells, period, isEnded }) => {
        if (isEnded) {
          return {}
        }

        const newCells = create2DArray(rowsSize)

        const newPeriod = period + 1

        let sumLivingCells = 0

        for (let i = 0; i < rowsSize; i += 1) {
          for (let j = 0; j < rowsSize; j += 1) {
            const isAlive = cells[i][j]

            const neighbors = countNeighbors(cells, rowsSize, i, j)

            newCells[i][j] =
              !isAlive && neighbors === 3
                ? true
                : isAlive && (neighbors < 2 || neighbors > 3)
                  ? false
                  : isAlive

            if (newCells[i][j]) {
              sumLivingCells += 1
            }
          }
        }

        return {
          cells: newCells,
          countLivingCells: sumLivingCells,
          isEnded: !sumLivingCells,
          period: newPeriod
        }
      },
      async () => {
        if (isGameLooping) {
          await delay(this.state.timeout)

          this.gameLoop()
        }
      }
    )
  }

  gameLoop = () => {
    if (this.state.gameStatus === GAME_STATUS.AUTOMATIC) {
      this.updateCellLifecycle(true)
    }
  }

  handleOnSelectCurrectTab = (selectedTabIndex, cb) => () => {
    this.setState(
      {
        selectedTabIndex
      },
      cb
    )
  }

  handleOnStartGame = gameStatus => {
    this.setState({ notStarted: false }, () => {
      this.handleOnUpdateGameStatus(gameStatus)(() => {
        const startAction =
          this.state.gameStatus === GAME_STATUS.AUTOMATIC
            ? this.gameLoop
            : this.updateCellLifecycle

        startAction()
      })
    })
  }

  handleOnSwitchLiveness = (cellLivingState, x, y) => () => {
    this.setState(({ cells, countLivingCells }) => {
      const copy = cells.slice(0).map(innerArr => innerArr.slice(0))

      const currentCountOfLivingCells = cellLivingState
        ? countLivingCells + 1
        : countLivingCells - 1

      copy[x][y] = cellLivingState

      return {
        cells: copy,
        countLivingCells: currentCountOfLivingCells
      }
    })
  }

  handleOnUpdateGameStatus = gameStatusLabel => cb => {
    const gameStatus = gameStatusLabel === 'AUTOMATIC' ? 2 : 1

    this.setState({ gameStatus }, () => {
      if (typeof cb === 'function') {
        cb()
      }
    })
  }

  handleOnUpdateTimeout = (operation = 'ADD') => {
    this.setState(({ timeout }) => {
      let newTimeout = operation === 'ADD' ? timeout + 1000 : timeout - 1000

      if (newTimeout < 1000) {
        newTimeout = 1000
      }

      return {
        timeout: newTimeout
      }
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          createAndSetInitialSetOfAliveCells: this
            .createAndSetInitialSetOfAliveCells,
          updateCellLifecycle: this.updateCellLifecycle,
          handleOnSelectCurrectTab: this.handleOnSelectCurrectTab,
          handleOnStartGame: this.handleOnStartGame,
          handleOnSwitchLiveness: this.handleOnSwitchLiveness,
          handleOnUpdateGameStatus: this.handleOnUpdateGameStatus,
          handleOnUpdateTimeout: this.handleOnUpdateTimeout,
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

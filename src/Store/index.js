/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-nested-ternary */

import React, { Component, createContext } from 'react'

const TIMEOUT = 1500
const DEFAULT_STATE = {
  cells: [],
  rowsSize: 50
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
        <Context.Consumer>{context => <Mixin {...context} />}</Context.Consumer>
      )
    }
  }
export class Provider extends Component {
  state = DEFAULT_STATE

  createAndSetInitialSetOfAliveCells = cb => {
    const { rowsSize } = this.state

    const cells = create2DArray(rowsSize)

    cells[0][0] = true
    cells[0][1] = true
    cells[1][0] = true
    cells[1][3] = true
    cells[2][1] = true
    cells[2][2] = true

    this.setState({ cells }, cb)
  }

  getNewCells = () => {
    const { rowsSize, cells } = this.state

    const newCells = create2DArray(rowsSize)

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
      }
    }

    this.setState(
      {
        cells: newCells
      },
      async () => {
        await delay(TIMEOUT)

        this.getNewCells()
      }
    )
  }

  startGame = () => {
    this.createAndSetInitialSetOfAliveCells(this.getNewCells)
  }

  render() {
    return (
      <Context.Provider
        value={{
          startGame: this.startGame,
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

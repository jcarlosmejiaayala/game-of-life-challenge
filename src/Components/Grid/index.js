/* eslint-disable react/no-array-index-key */
import React from 'react'

import Cell from 'Components/Cell'
import StyledGrid from 'Styled/StyledGrid'

const Grid = ({ cells = [[]], size = 0, switchLiveness = () => {} }) => (
  <StyledGrid size={size}>
    {cells.map((innerCells, x) =>
      innerCells.map((isAlive, y) => (
        <Cell
          key={x + y}
          isAlive={isAlive}
          switchLiveness={switchLiveness}
          x={x}
          y={y}
        />
      ))
    )}
  </StyledGrid>
)

export default Grid

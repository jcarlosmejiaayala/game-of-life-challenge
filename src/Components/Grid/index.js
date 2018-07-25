/* eslint-disable react/no-array-index-key */
import React from 'react'

import Cell from 'Components/Cell'
import StyledGrid from 'Styled/StyledGrid'

const Grid = ({ cells, size }) => (
  <StyledGrid size={size}>
    {cells.map((innerCells, outerIndex) =>
      innerCells.map((isAlive, innerIndex) => (
        <Cell key={outerIndex + innerIndex} isAlive={isAlive} />
      ))
    )}
  </StyledGrid>
)

export default Grid

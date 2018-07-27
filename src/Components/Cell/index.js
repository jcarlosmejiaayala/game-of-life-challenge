import React from 'react'

import StyledCell from 'Styled/StyledCell'

const Cell = ({ isAlive, switchLiveness, x, y }) => (
  <StyledCell isAlive={isAlive} onClick={switchLiveness(!isAlive, x, y)} />
)

export default Cell

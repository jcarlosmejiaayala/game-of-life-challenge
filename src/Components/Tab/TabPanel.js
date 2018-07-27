import React from 'react'

import { StyledTabPanel } from 'Styled/StyledTab'

const TabPanel = ({ children, isSelected }) => (
  <StyledTabPanel isSelected={isSelected}>{children}</StyledTabPanel>
)

export default TabPanel

import React from 'react'

import { StyledTabIndex } from 'Styled/StyledTab'

const TabIndex = ({
  handleOnSelectCurrectTab,
  index,
  isSelected,
  text,
  whenCurrentTabIsSelectedCB
}) => (
  <StyledTabIndex
    type="button"
    isSelected={isSelected}
    onClick={handleOnSelectCurrectTab(index, whenCurrentTabIsSelectedCB)}
  >
    {text}
  </StyledTabIndex>
)

export default TabIndex

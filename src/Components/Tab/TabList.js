import React, { Children, cloneElement } from 'react'

import { Consumer } from 'Store'
import { StyledTabList } from 'Styled/StyledTab'

const TabList = ({
  handleOnSelectCurrectTab,
  selectedTabIndex,
  children = []
}) => (
  <StyledTabList>
    {Children.map(children, (child, index) =>
      cloneElement(child, {
        handleOnSelectCurrectTab,
        index,
        isSelected: selectedTabIndex === index
      })
    )}
  </StyledTabList>
)

export default Consumer(TabList)

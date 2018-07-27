import React, { Component } from 'react'

import StyledUpdateTimeout from 'Styled/StyledUpdateTimeout'
import StyledTimeUpdaterButton from 'Styled/StyledTimeUpdaterButton'

class UpdateTimeout extends Component {
  hadleOnUpdateTimeoutClick = operation => () => {
    this.props.onUpdateTimeout(operation)
  }

  render() {
    const { timeout } = this.props

    return (
      <StyledUpdateTimeout>
        <StyledTimeUpdaterButton
          onClick={this.hadleOnUpdateTimeoutClick('SUBSTRACT')}
        >
          -
        </StyledTimeUpdaterButton>
        {timeout}ms.
        <StyledTimeUpdaterButton
          onClick={this.hadleOnUpdateTimeoutClick('ADD')}
        >
          +
        </StyledTimeUpdaterButton>
      </StyledUpdateTimeout>
    )
  }
}

export default UpdateTimeout

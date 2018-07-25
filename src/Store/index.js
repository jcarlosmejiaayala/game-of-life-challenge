import React, { Component, createContext } from 'react'

const DEFAULT_STATE = {}

const Context = createContext(DEFAULT_STATE)

export const Consumer = Mixin => (
  <Context.Consumer>{context => <Mixin {...context} />}</Context.Consumer>
)

export class Provider extends Component {
  state = DEFAULT_STATE

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

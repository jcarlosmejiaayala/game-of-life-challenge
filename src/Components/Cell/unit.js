import React from 'react'
import { shallow } from 'enzyme'

import Cell from 'Components/Cell'

const props = {
  isAlive: true,
  switchLiveness: jest.fn(),
  x: 0,
  y: 0
}

describe('<Cell />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<Cell {...props} />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should IsAlive be passed as props and false as value', () => {
    const wrapper = shallow(<Cell {...props} />)

    expect(wrapper.props().isAlive).toBeDefined()
    expect(wrapper.props().isAlive).toBeTruthy()
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import Cell from 'Components/Cell'

describe('<Cell />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<Cell />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should IsAlive be passed as props and false as value', () => {
    const wrapper = shallow(<Cell isAlive />)

    expect(wrapper.props().isAlive).toBeDefined()
    expect(wrapper.props().isAlive).toBeTruthy()
  })
})

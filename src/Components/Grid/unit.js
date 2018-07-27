import React from 'react'
import { shallow, mount } from 'enzyme'

import Grid from 'Components/Grid'

const props = {
  cells: [[]],
  size: 0
}

describe('<Grid />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<Grid {...props} />)

    expect(wrapper).toHaveLength(1)
  })

  it('Should receive props', () => {
    const wrapper = mount(<Grid {...props} />)

    expect(wrapper.props().cells).toBeDefined()
    expect(wrapper.props().size).toBe(0)
  })
})

import React from 'react'
import { shallow } from 'enzyme'

import Game from 'Components/Game'

describe('<Grid />', () => {
  it('Should be rendered succesfully', () => {
    const wrapper = shallow(<Game />)

    expect(wrapper).toHaveLength(1)
  })
})

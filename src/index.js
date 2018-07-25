import '@babel/polyfill'
import React from 'react'
import { render } from 'react-dom'

import Routes from 'Routes'
import './globalStyles'

render(<Routes />, document.getElementById('root'))

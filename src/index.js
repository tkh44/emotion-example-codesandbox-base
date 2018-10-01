import React from 'react'
import { render } from 'react-dom'

import Example from './Example.js'

const App = () => {
  return (
    <div>
      <Example />
    </div>
  )
}

render(<App />, document.getElementById('root'))

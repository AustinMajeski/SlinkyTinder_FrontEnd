import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TinderIndex from '../TinderIndex'

Enzyme.configure({ adapter: new Adapter() })

it('TinderIndex renders wihtout crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TinderIndex />, div)
})

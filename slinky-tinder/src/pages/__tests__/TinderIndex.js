import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TinderIndex from '../TinderIndex'
import TinderData from '../../db/TinderData'

Enzyme.configure({ adapter: new Adapter() })

it('TinderIndex renders wihtout crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TinderIndex profiles={ TinderData } />, div)
})

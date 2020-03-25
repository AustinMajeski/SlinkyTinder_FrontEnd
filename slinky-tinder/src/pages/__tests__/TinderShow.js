import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TinderShow from '../TinderShow'
import TinderData from '../../db/TinderData'

Enzyme.configure({ adapter: new Adapter() })

it('TinderShow renders wihtout crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TinderShow profiles={ TinderData }
      match = {{params: {id: 1}}}
    />, div)
})

it("TinderShow id 5's name", () => {
  const compareTheId = mount(<TinderShow profiles={ TinderData } match = {{params: {id: 5}}}/>)
expect(compareTheId.find('h2').text()).toEqual(TinderData[5].name )

})

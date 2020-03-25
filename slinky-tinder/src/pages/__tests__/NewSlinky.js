import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NewSlinky from '../NewSlinky'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NewSlinky />, div)
})

it('has a name input', ()=>{
  const component = mount(<NewSlinky />)
  // looks for an id of name on the label tag
  expect(component.find('label#name').text()).toBe("Name")
})

it('has a shape input', ()=>{
  const component = mount(<NewSlinky />)
  // looks for an id of age on the label tag
  expect(component.find('label#shape').text()).toBe("Shape")
})

it('has a  input', ()=>{
  const component = mount(<NewSlinky />)
  // looks for an id of enjoys on the label tag
  expect(component.find('label#material').text()).toBe("Material")
})

it('has a description input', ()=>{
    const component = mount(<NewSlinky />)
    // looks for an id of enjoys on the label tag
    expect(component.find('label#description').text()).toBe("Description")
  })

// it('has a submit button', ()=>{
//   const component = mount(<NewSlinky />)
//   // looks for an id of submit on the button
//   expect(component.find('button#submit').text()).toBe("Add New Cat")
// })
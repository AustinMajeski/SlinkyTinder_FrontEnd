import React, { Component } from "react"
import { Form, Input, Label } from 'reactstrap'

class NewSlinky extends Component {
constructor(props) {
    super(props)
    this.state = {
      form:{
        name: '',
        shape: '',
        material: '',
        description: ''
      }
    }
  }

  handleChange = (event) => {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({ form: form })

    console.table(form)
  }

render() {
    return(
        <div>
            <Form>
                <Label htmlFor="name" id="name">Name</Label>
                    <Input
                    type="text"
                    name="name"
                    onChange={ this.handleChange }
                    value={ this.state.form.name }
                    />

                    <Label htmlFor="shape" id="shape">Shape</Label>
                    <Input
                    type="text"
                    name="shape"
                    onChange={ this.handleChange }
                    value={ this.state.form.shape }
                    />



                    <Label htmlFor="material" id="material">Material</Label>
                    <Input
                    type="text"
                    name="material"
                    onChange={ this.handleChange }
                    value={ this.state.form.material }
                    />

                    <Label htmlFor="description" id="description">Description</Label>
                    <Input
                    type="text"
                    name="description"
                    onChange={ this.handleChange }
                    value={ this.state.form.description }
                    />

                </Form>
        </div>
    )
        
}



}

export default NewSlinky
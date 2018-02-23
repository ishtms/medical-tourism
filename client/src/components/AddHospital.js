import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Radio, TextArea } from 'semantic-ui-react'
import './add-hospital.css';

const options = [
    { key: 'j', text: 'Jammu and Kashmir', value: 'jammu' },
    { key: 'd', text: 'Delhi', value: 'delhi' },
    { key: 'a', text: 'Andhra Pradesh', value: 'andhra' },
    { key: 'm', text: 'Maharashtra', value: 'maharashtra' },
  ]

class AddHospital extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            state: '',
            group: null,
            tosChecked: false
        }
    }
    handleChange = (e) => {
        let StateObject = Object.assign({}, this.state);
        console.log(e.target.value)
        if(e.target.id === "group-yes" || e.target.id === "group-no"){
            StateObject.group = e.target.value;
        }else if(e.target.id === 'tos'){
            StateObject.tosChecked = !StateObject.tosChecked;
        }else{
            StateObject[e.target.id] = e.target.value;
        }
        this.setState(StateObject);
    }
    render() {
        console.log(this.state)
        const value = this.state.group;
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field id="name" onChange={this.handleChange} control={Input} label='Name of the Hospital' placeholder='eg. Medical College, Jammu' /><br/>
                    <Form.Field id="address" onChange={this.handleChange} onChange={this.handleChange} control={Input} label='Address' placeholder='eg. Street xyz, city name, state name' /><br/>
                    <Form.Field id="state" onChange={this.handleChange} control={Input} label='State' placeholder="Eg. Delhi"/>
                </Form.Group>
                <Form.Group inline>
                    <label>This hospital belongs to any group?</label>
                    <Form.Field id="group-yes" control={Radio} label='Yes' value='y' checked={value === 'y'} onChange={this.handleChange} />
                    <Form.Field id="group-no" control={Radio} label='No' value='n' checked={value === 'n'} onChange={this.handleChange} />
                </Form.Group>
                <Form.Field id="tos" onChange={this.handleChange} control={Checkbox} label='I agree to the Terms and Conditions' />
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        );
    }
}

export default AddHospital;

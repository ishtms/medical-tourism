import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

export default class IndexPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            lastDate: '28 Jan 2018',
            numOfHospitals: 23
        }
    }
  render() {
    return (
        <div>
            <Link to="/add">
                <Card>
                    <Image src='http://icons.iconarchive.com/icons/custom-icon-design/flatastic-4/512/Add-item-icon.png' />
                    <Card.Content>
                        <Card.Header>Add Hospital</Card.Header>
                        <Card.Meta>Last added - {this.state.lastDate}</Card.Meta>
                        <Card.Description>Add an entirely new hospital and edit it later if you want.</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {this.state.numOfHospitals} Hospitals
                        </a>
                    </Card.Content>
                </Card>
            </Link>
        </div>
    )
  }
}

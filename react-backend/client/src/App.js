import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logonPage from './components/logonpage.js';



import Form from "react-bootstrap/lib/Form";
import Col from "react-bootstrap/lib/Col";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import FormControl from "react-bootstrap/lib/FormControl";
import FormGroup from "react-bootstrap/lib/FormGroup";
import Checkbox from "react-bootstrap/lib/Checkbox";
import Button from "react-bootstrap/lib/Button";



class App extends Component {
  render() {
    return (
      <div className="App">
          hello





          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Sign in</Button>
              </Col>
            </FormGroup>
          </Form>

      </div>
    );
  }
}

export default App;

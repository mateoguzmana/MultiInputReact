import React, { Component } from "react";
import { Row, Input, Icon, Button, Col } from "react-materialize";
import "./index.css";

class MultiInputs extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      inputs: [{ id: 1, clicked: false, text: "" }]
    };
  }

  onChange(e, i) {
    this.state.inputs[i].text = e.target.value;

    this.setState({
      inputs: [...this.state.inputs]
    });
  }

  addNewItem(i) {
    this.state.inputs[i].clicked = true;

    this.setState({
      id: this.state.id + 1,
      inputs: [
        ...this.state.inputs,
        { id: this.state.id + 1, clicked: false, text: "" }
      ]
    });
  }

  removeItem(i) {
    this.setState({
      id: this.state.id - 1,
      inputs: this.state.inputs.filter((_, index) => index !== i)
    });
  }

  render() {
    return (
      <div className="multiinputs-container">
        {this.state.inputs.map((val, i) => {
          return (
            <Row key={val.id}>
              <Input
                placeholder="Placeholder"
                s={11}
                label={"Test Input"}
                placeholder={"Write something here..."}
                onChange={e => this.onChange(e, i)}
                onClick={() => (!val.clicked ? this.addNewItem(i) : {})}
              />
              <a onClick={() => this.removeItem(i)}>
                <Icon s={1} small className="clear-icon">
                  clear
                </Icon>
              </a>
            </Row>
          );
        })}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="form">
        <Row>
          <Col s={12} l={6}><h5 className="title">Multi Inputs</h5></Col>
          <Col s={12} l={6}><MultiInputs /></Col>
        </Row>
        <Row className="options">
          <div className="right-align">
            <a class="btn-flat">CANCEL</a>
            <a class="btn-flat save">SAVE</a>
          </div>
        </Row>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Row, Input, Icon } from "react-materialize";

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

export default MultiInputs;
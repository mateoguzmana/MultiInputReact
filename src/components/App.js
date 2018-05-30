import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import Title from "./Title";
import MultiInputs from "./MultiInputs";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="form">
        <Row>
          <Col s={12} l={6}>
            <Title text="Multi Inputs" />
          </Col>
          <Col s={12} l={6}>
            <MultiInputs />
          </Col>
        </Row>
        <Footer rightButton={"SAVE"} leftButton={"CANCEL"}/>
      </div>
    );
  }
}

export default App;

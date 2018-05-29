import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "react-materialize";

class Footer extends Component {
  render() {
    return (
      <Row className="options">
        <div className="right-align">
          <a class="btn-flat">{this.props.leftButton}</a>
          <a class="btn-flat save">{this.props.rightButton}</a>
        </div>
      </Row>
    );
  }
}

Footer.propTypes = {
  leftButton: PropTypes.string.isRequired,
  rightButton: PropTypes.string.isRequired
};

export default Footer;

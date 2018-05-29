import React, { Component } from "react";
import PropTypes from "prop-types";

class Title extends Component {
  render() {
    return <h5 className="title">{this.props.text}</h5>;
  }
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title;

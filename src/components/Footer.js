import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "react-materialize";

const Footer = (props) => {
  const { leftButton, rightButton } = props;
  return (
    <Row className="options">
      <div className="right-align">
        <a class="btn-flat">{leftButton}</a>
        <a class="btn-flat save">{rightButton}</a>
      </div>
    </Row>
  );
};

Footer.propTypes = {
  leftButton: PropTypes.string.isRequired,
  rightButton: PropTypes.string.isRequired
};

export default Footer;

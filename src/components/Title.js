import React from "react";
import PropTypes from "prop-types";

const Title = (props) => {
    const { text } = props;
    return <h5 className="title">{text}</h5>;
}

Title.propTypes = {
    text: PropTypes.string.isRequired
}

export default Title;

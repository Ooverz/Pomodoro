import React from "react";
import PropTypes from "prop-types";

const cyphers = ({value}) => {
    return(
        <span>
            {`${value}`.padStart(2, "0")}
        </span>
    )
}


cyphers.propTypes = {
    value: PropTypes.number.isRequired,
}

export default cyphers;

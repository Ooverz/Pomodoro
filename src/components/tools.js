import React from "react";
import PropTypes from "prop-types";
import Button from "./buttons";
import { SPACE } from "./constants";

const Tools = ({ running, onStartPause, onReset, onPlus, onMinus }) => {
    return (
        <div className={"is-flex"}>
            <Button label={"-"}
                title={"Remove one minute"}
                disabled={running}
                onClick={onMinus}
            />
            {SPACE}
            <Button label={"reset"}
                disabled={running}
                onClick={onReset} />
            {SPACE}
            <Button label={running ? "pause" : "start"}
                onClick={onStartPause}
                title={`${running ? "Pause" : "Start"} the timer`}
            />
            {SPACE}
            <Button label={"+"}
                title={"Add one minute"}
                disabled={running}
                onClick={onPlus}
            />
        </div>
    )
};

Tools.propTypes = {
    running: PropTypes.bool,
    onStartPause: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
}

export default Tools;
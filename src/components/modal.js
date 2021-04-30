import React from "react";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";
import useTimer from "./hooks/use-timer";
import Button from "./buttons";
import Display from "./display";

import {SPACE, PAUSE_DURATION} from "./constants";

const containerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    const [{running, seconds}, {setRunning}] = useTimer(
        PAUSE_DURATION,
        true,
        onRestart,
    );

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    return createPortal(
        <div style={containerStyles}>
            <div className={"box"}>
                <h4>{"STOP !!!"}</h4>
                <p>{"Short break. NOW !"}</p>
                <p>
                    {"New session will start soon."}
                </p>
                <Display seconds={seconds} running={running} />
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={stopThen(onClose)} />
                    {SPACE}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;
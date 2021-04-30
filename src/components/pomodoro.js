import React, {useState, useCallback} from "react";
import { SESSION } from "./constants";
import Display from "./display";
import Tools from "./tools";
import Modal from "./modal";
import useTimer from "./hooks/use-timer"

const Pomodoro = () => {

    const [showModal, setShowModal] = useState(false);
    const [{seconds, running }, {setSeconds, setRunning}] = useTimer(SESSION, false, () => setShowModal(true));
    const minus = useCallback(() => setSeconds(Math.max(seconds - 60, 0)), [seconds, setSeconds]);
    const plus = useCallback(() => setSeconds(seconds + 60), [seconds, setSeconds]);
    const startPause = useCallback(() => setRunning(!running), [seconds, setSeconds]);
    const reset = useCallback(() => setSeconds(SESSION), [seconds, setSeconds]);
    const modalClose = useCallback(() => {setShowModal(false);
        reset();}, [setShowModal, reset]);
    const restart = useCallback(() => {modalClose();
        startPause();}, [modalClose, startPause]);

    return (
        <div className={["columns", "is-mobile", "is-centered"].join(" ")}>
            <div className={["column", "is-half"].join(" ")}>
                <Display seconds={seconds} />
                <Tools running={running}
                onMinus={minus}
                onPlus={plus}
                onStartPause={startPause}
                onReset={reset}
                />
            </div>
            <Modal show={showModal}
                onClose={modalClose}
                onRestart={restart}
            />
        </div>
    )
};

export default Pomodoro;
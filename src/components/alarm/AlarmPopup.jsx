import Button from "../button/Button";
import "./AlarmPopup.css";

function AlarmPopup(props) {
    return (
        <div className="alarm_popup">
            <h1>Alarma activada de las {props.alarm_time}</h1>
            <div className="button_container">
                <Button onClick={props.onSnooze}>Snooze 5 min</Button>
                <Button onClick={props.onStop}>Stop</Button>
            </div>
        </div>
    );
}

export default AlarmPopup;
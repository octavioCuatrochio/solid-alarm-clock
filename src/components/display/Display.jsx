import "./Display.css";
import { createSignal } from "solid-js";

function Display() {

    const [time, setTime] = createSignal("12:00");

    function toggleFullscreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }

    function updateTime() {
        let now = new Date();
        let hours = now.getHours();
        let mins = now.getMinutes();
        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;

        let string_time = hours + ":" + mins;
        setTime(string_time);
    }

    updateTime();

    setInterval(() => {
        updateTime();
    }, 10000);

    return (
        <div className="display_container">
            <h1 onClick={toggleFullscreen} className="display">{time()}</h1>
        </div>
    );
}

export default Display;
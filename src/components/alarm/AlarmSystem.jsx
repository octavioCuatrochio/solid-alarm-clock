import sound from '../../audio/alarm1.mp3';
import AlarmPopup from './AlarmPopup';
import { createSignal } from "solid-js";

function AlarmSystem(props) {

    const [showPopup, setShowPopup] = createSignal(false);
    const [audio, setAudio] = createSignal(new Audio(sound));

    function start() {
        togglePopup();
        audio.loop = true;
        audio().play();
    }

    function togglePopup() {
        setShowPopup(!showPopup());
    }

    function stop() {
        togglePopup();
        audio().pause();
        audio().currentTime = 0;
    }

    function snooze() {
        stop();

        let timer = new easytimer.Timer();
        timer.start({ countdown: true, startValues: { minutes: 5 } });

        timer.addEventListener('targetAchieved', function (e) {
            start();
        });
    }

    return (
        <div>
            {showPopup() &&
                <AlarmPopup onSnooze={snooze} onStop={stop} alarm_time="12:00" />}
        </div>
    )
}

export default AlarmSystem;
import "./DebugScreen.css";
import { createSignal } from "solid-js";

function DebugScreen(props) {

    const [value, setValue] = createSignal();

    let batteryPromise = navigator.getBattery();
    batteryPromise.then(batteryCallback);

    function batteryCallback(batteryObject) {
        setValue({
            "IsCharging": batteryObject.charging,
            "Percentage": batteryObject.level,
            "charging Time": batteryObject.chargingTime,
            "DisCharging Time": batteryObject.dischargingTime,
        });
    }


    return (
        <div class="debug_container">
            <p>{JSON.stringify(value())}</p>
        </div>
    )
}

export default DebugScreen;
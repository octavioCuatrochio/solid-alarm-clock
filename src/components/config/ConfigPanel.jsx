import "./ConfigPanel.css";
import Panel from "../panel/Panel";
import Button from "../button/Button";


function ConfigPanel() {

    const MIN_DIA = 1440;

    function dateTimeHandler(e) {
        let future = e.target.value;


        let hours = future.charAt(0) + future.charAt(1);
        let mins = future.charAt(3) + future.charAt(4);

        future = new Date();
        future.setHours(hours);
        future.setMinutes(mins);

        let now = new Date();

        let diff_sec = (future - now) / 1000;

        if (diff_sec < 0) diff_sec = diff_sec + (MIN_DIA * 60);

        console.log((diff_sec / 60) / 60);
    }

    return (
        <Panel className="config_panel">
            {/* <Button>Click me</Button> */}
            <input type="time" onChange={dateTimeHandler} />
        </Panel>
    )
}

export default ConfigPanel;
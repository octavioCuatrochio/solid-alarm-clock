import "./Options.css";
import { BsGear } from 'solid-icons/bs'
import { BiBell } from 'solid-icons/bi'

function Options(props) {

    function configHandler() {
        props.onConfigAction();
    }

    return (
        <div className="options_container">
            <BsGear onCLick={configHandler} size={24} color="#fff" />
            <BiBell size={24} color="#fff" />
        </div>
    )
}

export default Options;
import "./Panel.css";

function Panel(props) {

    let classes;
    if (props.className) {
        classes = "panel " + props.className;
    } else {
        classes = "panel";
    }

    return (
        <div class={classes}>
            {props.children}
        </div>
    )
}

export default Panel;
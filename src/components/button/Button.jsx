import "./Button.css";

function Button(props) {

    let classes;
    if (props.className) {
        classes = "custom_btn " + props.className;
    } else {
        classes = "custom_btn";
    }

    return (
        <button type={props.type || 'button'}
            onClick={props.onClick} class={classes}>{props.children}</button>
    )
}

export default Button;
import {MouseEventHandler} from "react";

function Square(props: { onClick: MouseEventHandler<HTMLButtonElement>; value: string }) {

    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>);
}

export default Square;
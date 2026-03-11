import { Fragment } from "react";

function Greetings(props) {
    return (
        <div style={{ backgroundColor: "green"}}>
            < h1 >
            Hello, {props.name} {props.surname}!
            </h1>
    
            <h2>this text was not there</h2>
        </div>

    );
}

export default Greetings;
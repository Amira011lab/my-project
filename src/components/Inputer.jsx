import { useState } from "react";
function Inputer() {
    const [text, setText] = useState("");

    const handleChange = (e) => {    // (e) means events
        setText(e.target.vlue); // reads user input
    };
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>You typed: {text}</p>
        </div>
    )
}
export default Inputer;
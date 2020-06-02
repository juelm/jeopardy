
import React, { useState } from "react";
import {questionStyle} from '../modules/styles'



const QuestionPane = (props) => {
    const [answer, setAnswer] = useState("");
    return (
        <div style={questionStyle()}>
            <h3>{props.question}</h3>
            <form>
                <label > Answer:
                    <input type = "text" value = {answer} onChange={e => setAnswer(e.target.value)}></input>
                </label>
                <input type="submit" value="submit" onSubmit={props.onClick(answer)}></input>
            </form>
        </div>
    );
};

export default QuestionPane;
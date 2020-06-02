
import React, { useState } from "react";
import {headerStyle} from '../modules/styles'



const Header = (props) => {
    const [answer, setAnswer] = useState("");
    return (
        <div style={headerStyle()}>
            <h1>Jeopardy</h1>
        </div>
    );
};

export default Header;
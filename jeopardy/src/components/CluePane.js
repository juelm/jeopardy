import React from 'react';
import {paneStyle} from '../modules/styles'



const CluePane = (props) => {
    return (
        <div style={paneStyle()}>
            <h1>{props.value}</h1>
        </div>
    );
};

export default CluePane;
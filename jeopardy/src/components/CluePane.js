import React from 'react';
import {paneStyle} from '../modules/styles'



const CluePane = (props) => {
    return (
        <div style={paneStyle()} id = {props.id} onClick = {props.onClick()}>
            <h1 id = {props.id}>{props.value}</h1>
        </div>
    );
};

export default CluePane;
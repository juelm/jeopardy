import React from 'react';
import {categoryPaneStyle} from '../modules/styles'



const CategoryPane = (props) => {
    return (
        <div style={categoryPaneStyle()}>
            <h3>{props.value}</h3>
        </div>
    );
};

export default CategoryPane;
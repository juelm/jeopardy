import React from 'react';
import {categoryPaneStyle} from '../modules/styles'
import CategoryPane from './CategoryPane';
import CluePane from './CluePane';
import {categoryStyle} from '../modules/styles'


const Category = (props) => {

    function createCategory(){
        let category = [];
        let clues = props.clues;
        category.push(<CategoryPane value = {props.title}></CategoryPane>);

        for(let i = 0; i < 5; i++){
           category.push(<CluePane id = {clues[i].id} value = {clues[i].value} onClick = {props.onClick}></CluePane>);
        }
        return category; 
    }

    return (
        <div style = {categoryStyle()}>
            {createCategory()}
        </div>
    );
};

export default Category;
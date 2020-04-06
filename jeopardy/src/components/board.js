import React, { useEffect, useState } from "react";
import {boardStyle} from '../modules/styles'
import {categoryStyle} from '../modules/styles'
import CategoryPane from './CategoryPane'
import CluePane from './CluePane'
import createBoard from '../modules/createBoard'

function Board() {
  const [categories, setCategories] = useState([]);
  const [clues, setClues] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  useEffect(() => {
    createBoard(setCategories, setClues);
  }, []);

//   function buildTab(index) {
//     let date = new Date(daylies[index].DailyDate)

//     return (
//       <Tab key={index} label={date.toDateString()} {...a11yProps(index)} />
//     );
//   }

//   function createTabList() {
//     let tabContainer = [];
//     for (let i = 0; i < daylies.length; i++) {
//       tabContainer.push(buildTab(i));
//     }
//     return tabContainer.reverse();
//   }

//   function buildTabPanel(index) {
//     return (
//       <TabPanel value={value} index={index}>
//         <h1>{daylies[index].Title}</h1>
//         <p dangerouslySetInnerHTML = {{__html: daylies[index].DailyText}} />
//       </TabPanel>
//     );
//   }

  function createCategoryList() {
    let paneContainer = [];
    for (let i = 0; i < categories.length; i++) {
      paneContainer.push(<CategoryPane value = {categories[i]}></CategoryPane>);
    }
    return paneContainer;
  }

  function createClueRows() {
    let boardContainer = [];
    let rowContainer = [];
    let j = 0;
    for(let i = 0; i < clues.length; i++){

        if(j % 6 == 0){
            boardContainer.push(<div>{rowContainer}</div>);
            j = 0;
            rowContainer = [];
         }
         rowContainer.push(<CluePane value = {clues[i]}></CluePane>)
         j++;
    }
    return boardContainer;
  }

  return (
    <div style = {boardStyle()}>
        {createCategoryList()}
        {createClueRows()}
    </div>
  );
}

export default Board;
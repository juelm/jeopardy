import React, { useEffect, useState } from "react";
import {boardStyle} from '../modules/styles'
import Category from './Category'
import createBoard from '../modules/createBoard'
import QuestionPane from "./QuestionPane";
import {questionStyle} from '../modules/styles'

function Board() {
  const [board, setBoard] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);


  useEffect(() => {
    createBoard(setBoard, 27);
  }, []);

  function handleClick(event){
    for(const category in board){
        for(let i = 0; i < board[category].length; i ++){
            if(board[category][i].id == event.target.id){
                console.log(board[category][i].question);
                setCurrentQuestion(board[category][i].question);
                setPoints(board[category][i].value);
            }
        }
    }
    //console.log(event.target.id);
  }

  function onSubmit(e){
    console.log(e);
    if(currentQuestion == currentAnswer){
        setScore(score + points);
        alert("Correct!");
    }else{
        setScore(score - points);
    }
    setCurrentQuestion("");
    setCurrentAnswer("");
    setPoints(0);
  }

  function createBoardDisplay(){
    let categories = [];
    for(const category in board){
        categories.push(<Category title = {category} clues = {board[category]} onClick = {() => handleClick}></Category>);
    }
    return categories;
  }

  return (
    <div style = {boardStyle()}>
        {currentQuestion ? <QuestionPane question = {currentQuestion} onClick = {() => onSubmit}></QuestionPane> : createBoardDisplay()}
    </div>
  );
}

export default Board;
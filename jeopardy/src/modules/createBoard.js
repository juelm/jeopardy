export default async function createBoard(setBoard, offset){

    let boardState = {};
   
    // let res = await fetch(`http://jservice.io/api/categories?count=6&offset=${offset}`);
    // let resData = await res.json();

    // for(let i = 0; i < await resData.length; i++){
    //     let category = await fetch(`http://jservice.io/api/category?id=${await resData[i].id}`);
    //     let categoryData = await category.json();
    //     console.log(categoryData)
    //     boardState[categoryData.title] = categoryData.clues;
    // }

    let res = await fetch("http://localhost:8080/newgame");
    let resData = await res.json();
    console.log(resData)
    for(let i = 0; i < resData.length; i++){
        let category = resData[i]
        //console.log(category)
        boardState[category.title] = category.clues;
    }
    setBoard(boardState)
}
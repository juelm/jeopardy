export default async function createBoard(setBoard, offset){

    let boardState = {};
   
    // let res = await fetch(`http://jservice.io/api/categories?count=6&offset=${offset}`);
    let res = await fetch(`http://jservice.io/api/categories?count=6&offset=${offset}`);
    let resData = await res.json();

    for(let i = 0; i < await resData.length; i++){
        let category = await fetch(`http://jservice.io/api/category?id=${await resData[i].id}`);
        let categoryData = await category.json();
        console.log(categoryData)
        boardState[categoryData.title] = categoryData.clues;
    }

    setBoard(boardState)

}
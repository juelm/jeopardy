export default async function createBoard(setCategories, setClues){

    let offset  = Math.ceil(Math.random() *500)
    let boardState = {};
   
    let res = await fetch(`http://jservice.io/api/categories?count=6&offset=${offset}`);
    let resData = await res.json();
    console.log(resData);

    for(let i = 0; i < await resData.length; i++){
        let category = await fetch(`http://jservice.io/api/category?id=${await resData[i].id}`);
        let categoryData = await category.json();
        boardState[categoryData.title] = categoryData.clues;
    }

    console.log(boardState);

    let categories = [];
    let clues = []

    for(let i = 0; i < resData.length; i++){
        categories.push(resData[i].title);
    }

    for(let i = 1; i < 6; i++){
        for(let j = 0; j < categories.length; j++){
            clues.push(i *100);
        }
    }


    setCategories(categories);
    setClues(clues);

}
function pageStyle() {
  return {
    padding: "10%",
    marginTop: 10,
  };
}

function categoryStyle(){
  return{
    backgroundColor: "tan",
    width:"80%",
    verticalAlign: "middle"
  }
}

function boardStyle(){
  return{
    backgroundColor: "tan",
    width:"80%",
    margin:"50px 10% 0 10%"
  }
}

function paneStyle(){
  return{
    backgroundColor:"blue", 
    color: "yellow",
    height: "100px",
    width: "150px",
    borderRadius: "20px",
    textAlign:"center",
    display: "inline-block",
    margin:"10px"

  }
}

function categoryPaneStyle(){
  return{
    backgroundColor:"blue", 
    color: "yellow",
    height: "100px",
    width: "150px",
    borderRadius: "20px",
    textAlign:"center",
    verticalAlign: "middle",
    display: "inline-block",
    margin:"10px"

  }
}



module.exports = { pageStyle, categoryStyle, boardStyle, paneStyle, categoryPaneStyle};

function categoryStyle(){
  return{
    display:"inline-block",
    margin:"0 10px 0 10px"
  }
}

function boardStyle(){
  return{
    width:"80%",
    margin:"50px 10% 0 10%"
  }
}

function questionStyle(){
  return{
    width:"80%",
    color:"yellow",
    height: "100px",
    borderRadius: "20px",
    backgroundColor: "blue",
    textAlign: "center",
    margin:"50px 10% 0 10%"
  }
}

function headerStyle(){
  return{
    width:"64%",
    color:"yellow",
    height: "100px",
    borderRadius: "20px",
    backgroundColor: "blue",
    textAlign: "center",
    margin:"25px 18% 0 18%"
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
    margin: '10px 0 10px 0',
    paddingTop: '10px'
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
    margin: '10px 0 10px 0',
    paddingTop: '10px'
  }
}



module.exports = {categoryStyle, boardStyle, questionStyle, headerStyle, paneStyle, categoryPaneStyle};

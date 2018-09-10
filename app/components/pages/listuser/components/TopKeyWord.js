
import React from "react";


class TopKeyWord extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        listKeyWord :[
          { value: "jQuery", count: 25 },
          { value: "JavaScript", count: 38 },
           { value: "React", count: 30 },
          { value: "Nodejs", count: 28 },
          { value: "Express.js", count: 25 },
          { value: "HTML5", count: 33 },
           { value: "CSS3", count: 20 },
          { value: "Webpack", count: 22 }
          , { value: "Babel.js", count: 7 },
          { value: "ECMAScript", count: 25 },

        ]
    }
  }
  render(){
    return(
       <div className="module col-md-12 remove-padding-col ">
            <div className="header-top-keyword col-md-12"> TOP KEY WORD</div>
            <div className="list-keyword">
                  {this.state.listKeyWord.map((keyword)=>{
                    return(
                      <div className="col-md-12 row-data remove-padding-col">
                          <div className="col-md-9 keyword">
                             {keyword.value}
                          </div>
                          <div className="col-md-3 keyword">
                             {keyword.count} %
                          </div>
                      </div>
                    )
                  })}
            </div>
       </div>
    )
  }
}
module.exports = TopKeyWord

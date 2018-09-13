import React from 'react'
import Post from './Post'
class ListPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        listPost :[]
    }
  }
  render(){
       let listPost = this.state.listPost
              return(
                <div>
                <div className="col-md-12 remove-padding-col info-detail ">
                    <div className="list-tab">
                        <div className="tab-filter active">
                            <div className="text">Tất cả</div>
                        </div>
                        <div className="tab-filter ">
                            <div className="text">Facebook</div>
                        </div>
                        <div className="tab-filter ">
                            <div className="text">Youtube</div>
                        </div>
                        <div className="tab-filter ">
                            <div className="text">Twitter</div>
                        </div>
                        <div className="tab-filter ">
                            <div className="text">Khác</div>
                        </div>
                    </div>

            </div>
             <div className="col-md-12 remove-padding-col info-detail list-status ">
                        {listPost.length>0?listPost.map((post,index)=>{
                            return (
                              <Post key={index} post={post} />
                            )
                        })
                      }
                  </div>
              </div>
              )
        }
}

module.exports = ListPost

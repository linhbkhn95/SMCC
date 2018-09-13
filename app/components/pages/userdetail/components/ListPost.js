import React from 'react'
import Post from './Post'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
class ListPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        listPost :[]
    }
  }
  componentDidMount(){
    let that = this
       io.socket.post('/post/getSpecial',function(res,jwres){
         if(res.EC==0){
             that.setState({listPost:res.DT})

         }
     })

 }
  render(){
       let listPost = this.state.listPost
              return(
              <div className="col-md-12 remove-padding-col">
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
                            return
                              <Post key={index} post={post} />

                        }):null

                      }
                        <div className="col-md-12 pagination-web remove-padding-col info-detail list-status ">
                        <Pagination className="ant-pagination" defaultCurrent={1} total={100} />
                        </div>

               </div>
            </div>
              )
  }

}

module.exports = ListPost

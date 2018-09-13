import React from 'react'
import Post from './Post'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import RestfulUtils from 'app/utils/RestfulUtils'


class ListPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        listPost :[],
        topic:''
    }
  }

 get_new_search(topic){
   let self =this
          RestfulUtils.post('/user/get_new_search',{topic}).then((res)=>{
              if(res.EC==0){
                  self.setState({topic,listPost:res.DT})
              }
    })
}
    componentWillReceiveProps(nextProps){
          let {topic} = nextProps
          if(topic!=this.props.topic){
            this.get_new_search(topic);
          }
    }
  render(){

       let listPost = this.state.listPost
       console.log(listPost,listPost.length)
       let renderListPost =  listPost.length>0?listPost.map((post,index)=>{
        return  <Post key={index} post={post} />

    }):<div>ffffffffffffffffffffff</div>


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
                        {renderListPost}
                        <div className="col-md-12 pagination-web remove-padding-col info-detail list-status ">
                        <Pagination className="ant-pagination" defaultCurrent={1} total={100} />
                        </div>

               </div>
            </div>
              )
  }

}

module.exports = ListPost

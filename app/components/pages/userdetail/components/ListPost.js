import React from 'react'
import Post from './Post'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import RestfulUtils from 'app/utils/RestfulUtils'
import moment from 'moment'


class ListPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        listPost :[],
        topic:'',
        listFilter:[
          {
            value:0,
            className:'tab-filter active',
            label:'Tất cả'
          },
          {
            value:2,
            className:'tab-filter',
            label:'Facebook'
          },
          {
            value:1,
            className:'tab-filter',
            label:'Báo chí'
          },
          {
            value:12,
            className:'tab-filter',
            label:'Diễn đàn'
          },
          {
            value:3,
            className:'tab-filter',
            label:'Blog'
          },
          {
            value:4,
            className:'tab-filter',
            label:'Khác'
          },
      ],

      source_id:0
    }
  }

 get_new_search(topic,source_id){
   let self =this
   let date_to = moment().format('YYYY-MM-DD HH:MM:SS');                          // 2018-09-11T02:46:15+07:00
   let date_from = moment().subtract(1, 'days').format('YYYY-MM-DD'); // 01/09/2018
          RestfulUtils.post('/user/get_new_search',{topic,source_id,date_from,date_to}).then((res)=>{
              if(res.EC==0){
                  self.setState({topic,listPost:res.DT})
              }
    })
}
    componentWillReceiveProps(nextProps){
          let {topic} = nextProps
          if(topic!=this.props.topic){
            let {source_id} = this.state
            this.get_new_search(topic,source_id);
          }
    }
    filter(value){

      let listFilter = this.state.listFilter
      for(var i=0;i<listFilter.length;i++){
        if(value==listFilter[i].value)
          listFilter[i].className = "tab-filter active"
        else
          listFilter[i].className = "tab-filter"
      }
      this.get_new_search(this.props.topic,value)
      // this.props.onChangeSe(value)
      this.setState({source_id:value,listFilter})
    }

  render(){

       let {listFilter,listPost,valueActive} = this.state
       console.log(listPost,listPost.length)
       let renderListPost =  listPost.length>0?listPost.map((post,index)=>{
        return  <Post key={index} post={post} />

    }):<div>ffffffffffffffffffffff</div>


              return(
              <div className="col-md-12 remove-padding-col">
                  <div className="col-md-12 remove-padding-col info-detail ">


                    <div className="list-tab">
                    {listFilter.map((filter,index)=>{
                        let active  = filter.value==valueActive

                        return(
                            active?<div key={index}  className={filter.className}>
                                    <div className="text" >{filter.label}</div>
                                </div>:
                            <div key={index}    onClick={this.filter.bind(this,filter.value)}  className={filter.className}>
                            <div className="text" >{filter.label}</div>
                      </div>
                        )
                    })}
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

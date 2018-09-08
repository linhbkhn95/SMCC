import React from 'react';
import {NavLink} from 'react-router-dom';
import RestfulUtils from 'app/utils/RestfulUtils'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Select from 'rc-select';
import localeInfo from 'rc-pagination/lib/locale/vi_VN';

import moment from 'moment'
var datedemo=1536072804565
class ListStatus extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options:[],
      subject:null,

      items: 10,
      page:1,
      loadingState: false,
      fulldata:false,
       listStatus:[

        ],
        city_id:0,
        showLoading:false,
        pager:0,
        // pageActive:1
        pagesize:6
    }
  }
  getDataWithCity(city_id,page,pagesize,valueActive){
    let that = this
    this.setState({showLoading:true})
    RestfulUtils.post('/dashboard/getDataWithCity',{city_id,page,pagesize,se:valueActive}).then((res)=>{
          let pager = parseInt(res.pager)
          that.setState({listStatus:res.results,pager,page,pagesize,showLoading:false})

    })
}
  componentWillReceiveProps(nextProps){
      let {city_id,valueActive} = nextProps
      if(this.state.city_id!=city_id){
          this.setState({city_id,page:1,pagesice:6})
          this.getDataWithCity(city_id,1,6)
      }
      if(this.props.valueActive!=nextProps.valueActive){
          this.setState({city_id,page:1,pagesice:6})
          this.getDataWithCity(city_id,1,6,valueActive)
      }
  }
  componentDidMount(){
    this.getDataWithCity('24',1,6);

    let that  = this
     $(".list-status").scroll(function () {
       console.log('vao')
      var $this = $(this);

          // if( ( ($(document).height() - $(window).height())-$(window).scrollTop())<50&&!self.state.fulldata) {
          //   if(($("#list-status").height() - $this.scrollTop()) -$this.height()<50&&!that.state.fulldata) {

          //    console.log('load',$("#list-status").height(),$this.scrollTop(),$this.height())
          //     that.loadMoreItems();
          // }
      });

        console.log('  componentDidMount(){')
      // io.socket.post('/post/getListPost',{page:that.state.page},function(res,jwres){
      //     if(res.EC==0){
      //         that.setState({listStatus:res.DT,page:that.state.page+1,loadingState:false})

      //     }
      // })
      // this.getDataWithCity();

  }
  loadMoreItems() {
    if(this.state.loadingState){
        return;
    }
   this.setState({ loadingState: true });
   let self  =this;
   let {dispatch} = this.props
    let {subject} = this.state
    io.socket.post('/post/getlistPost',{page:this.state.page,listsubject:subject},function(res,jwres){
      if(res.EC==0){
          console.log('dataload',res.DT)
          if(res.DT.length<3){
              console.log('stopp loaddata')
              self.state.fulldata  = true
          }
          let data = self.state.listStatus.concat(res.DT)
          self.setState({listStatus:data,page:self.state.page+1,loadingState:false,fulldata:self.state.fulldata})

      }
    })
   // setTimeout(() => {
   //   this.setState({ items: this.state.items + 10, loadingState: false });
   // }, 1000);
 }
  onShowSizeChange(current, pageSize) {
    // console.log(current);
    // console.log(pageSize);
    this.getDataWithCity(this.state.city_id,current,pageSize)
}

 onChange(current, pageSize) {
  // console.log('onChange:current=', current);
  // console.log('onChange:pageSize=', pageSize);
  this.getDataWithCity(this.state.city_id,current,pageSize)

  }

	render () {
    let {listStatus} = this.state
    let ListStatus = listStatus.length>0?
    listStatus.map((status,index)=>{
      let id = index%3
      // let length = status.content_oryginal.length
      // let len = status.tag.length
      // if(len>20)
      //   status.tag = status.tag.substring(0, 20) +"...";
      // if(length>80)
      //    status.content_oryginal = status.content_oryginal.substring(0, 80) +"...";
      // let typeChannel = id==0?"fa fa-facebook":id=="1" ?"fa fa-youtube-play" : "fa fa-twitter"
      let typeChannel = "fa fa-facebook"
      return(
       <div key={index} className="col-md-4 status ">
       <div className="user-info col-md-12 remove-padding-col">
           <div className="col-md-1 remove-padding-col"><img className="img-user" src={status.author_avatar_url} /></div>
           <div  className="info col-md-11">
                 <div className="name">{status.tag} </div>

             </div>
       </div>
       <div className="info-status">
                 <a style={{marginRight:"3px"}} href={status.url_ref}>Bài viết</a> trên <a style={{marginLeft:"3px"}} href={status.author_url}>{status.author} </a>
       </div>
       <div className="content-status">
           {status.content_oryginal}
       </div>


       <div className="like-comment row">
          <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{status.like_count?status.like_count:0}</div>
          <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{status.response?status.response:0}</div>
          <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{status.shares_count?status.shares_count:0}</div>

       </div>
       <div className="col-md-12 hr" ></div>
       <div className="user-info">
       {/* <img className="img-user" src={status.user.url_avatar} /> */}
       <div className="type-channel" ><i className={typeChannel} aria-hidden="true"></i></div>

       <div style={{float:"left"}} className="">
             {/* <div className="name">{status.user.fullname} </div> */}
             <p className="time">{moment(status.created_date).lang('vi').fromNow()}</p>

       </div>
         <div className={status.results_sentiment==1?"type-action tieu-cuc":"type-action tich-cuc"}>{status.results_sentiment==1?"Tiêu cực":"Tích cực"}</div>

      </div>
   </div>
      )
    }):<div style={{
      textAlign: "center",
      padding: "12px",
      fontSize: "13px",
      color: "#7a887a"
   }}></div>
  	return (
        <div className="container-list">
               {/* <LinearProgress /> */}
               {this.state.showLoading?<div className="loading-progress"> <CircularProgress size={50} /></div>:null}

         <div id="list-status list-user" className="col-md-12 list-status">

             {/* {listStatus.map((status)=>{
               return(
                <div className="col-md-4 status ">
                <div className="user-info">
                   <img className="img-user" src={status.user.url_avatar} />
                    <div className="info">
                          <div className="name">{status.user.fullname} </div>
                          <div className="title-facbook">Facbook</div>
                    </div>
                </div>
                <div className="content-status">
                    {status.status.content}
                </div>
                <div className="info-status">
                      <a href={status.url_ref}>Bài viết</a> trên <a href={status.user.url_user}>{status.user.fullname}</a> </div>

                <div className="like-comment row">
                   <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{status.action.like}</div>
                   <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{status.action.comment}</div>
                   <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{status.action.share}</div>

                </div>
            </div>
               )
             })} */}

             {ListStatus}
            </div>
            <div style={{textAlign:"center",fontSize:"12px"}}>{this.state.loadingState ? <p style={{fontSize:"12px"}} className="loading"> đang tải dữ liệu..</p> : ""} </div>


            <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}} className="col-md-12">
            <Pagination className="ant-pagination"
          selectComponentClass={Select}
          showQuickJumper
          showSizeChanger
          defaultPageSize={6}
          defaultCurrent={1}
          pageSizeOptions={['6','12','24']}
          onShowSizeChange={this.onShowSizeChange.bind(this)}
          onChange={this.onChange.bind(this)}
          total={this.state.pager}
          locale={localeInfo}
           style={{color:"white"}}
            />

            </div>

         </div>
    );
  }
}

module.exports =  ListStatus;

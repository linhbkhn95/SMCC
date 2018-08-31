import React from 'react';
import {NavLink} from 'react-router-dom';


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
      //    {
      //      user:{
      //         url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
      //         fullname:"Trịnh Linh",
      //         user_user:"#"
      //      },
      //      status:{
      //           content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
      //           url_ref:"#",

      //      },
      //      action:{
      //         like:"1.2K",
      //         comment:"456",
      //         share:"1.3K"
      //      }
      //   },
      //   {
      //     user:{
      //        url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
      //        fullname:"Trịnh Linh",
      //        user_user:"#"
      //     },
      //     status:{
      //          content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
      //          url_ref:"#",

      //     },
      //     action:{
      //        like:"1.2K",
      //        comment:"456",
      //        share:"1.3K"
      //     }
      //  },
      //  {
      //   user:{
      //      url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
      //      fullname:"Trịnh Linh",
      //      user_user:"#"
      //   },
      //   status:{
      //        content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
      //        url_ref:"#",

      //   },
      //   action:{
      //      like:"1.2K",
      //      comment:"456",
      //      share:"1.3K"
      //   }
      //  },
      //  {
      //   user:{
      //      url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
      //      fullname:"Trịnh Linh",
      //      user_user:"#"
      //   },
      //   status:{
      //        content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
      //        url_ref:"#",

      //   },
      //   action:{
      //      like:"1.2K",
      //      comment:"456",
      //      share:"1.3K"
      //   }
      //  },
      //  {
      //   user:{
      //      url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
      //      fullname:"Trịnh Linh",
      //      user_user:"#"
      //   },
      //   status:{
      //        content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
      //        url_ref:"#",

      //   },
      //   action:{
      //      like:"1.2K",
      //      comment:"456",
      //      share:"1.3K"
      //   }
      //  },
      //  {
      //   user:{
      //      url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
      //      fullname:"Trịnh Linh",
      //      user_user:"#"
      //   },
      //   status:{
      //        content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
      //        url_ref:"#",

      //   },
      //   action:{
      //      like:"1.2K",
      //      comment:"456",
      //      share:"1.3K"
      //   }
      //  }
        ]
    }
  }

  componentDidMount(){
    let that  = this
     $(".list-status").scroll(function () {
       console.log('vao')
      var $this = $(this);

          // if( ( ($(document).height() - $(window).height())-$(window).scrollTop())<50&&!self.state.fulldata) {
            if(($("#list-status").height() - $this.scrollTop()) -$this.height()<50&&!that.state.fulldata) {

             console.log('load',$("#list-status").height(),$this.scrollTop(),$this.height())
              that.loadMoreItems();
          }
      });

        console.log('  componentDidMount(){')
      io.socket.post('/post/getListPost',{page:that.state.page},function(res,jwres){
          if(res.EC==0){
              that.setState({listStatus:res.DT,page:that.state.page+1,loadingState:false})

          }
      })

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
	render () {
    let {listStatus} = this.state
    let ListStatus = listStatus.length>0?
    listStatus.map((status,index)=>{
      return(
       <div key={index} className="col-md-4 status ">
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
    }):<div style={{
      textAlign: "center",
      padding: "12px",
      fontSize: "13px",
      color: "#7a887a"
   }}>Chưa có bài đăng nào</div>
  	return (
        <div className="container-list">
         <div id="list-status" className="col-md-12 list-status">
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

         </div>
    );
  }
}

module.exports =  ListStatus;

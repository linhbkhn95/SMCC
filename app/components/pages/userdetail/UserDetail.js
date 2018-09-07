import React from 'react';
import {NavLink} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import PieChart from './components/PieChart'
import ChartLine from './components/ChartTendencyComment'
import moment from 'moment'
var datedemo=1536072804565
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';


class ListUser extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

      items: 10,
      page:1,
      loadingState: false,
      fulldata:false,
      rating_half_star: 3.5,

      value5: {
        min: 14,
        max: 40,
      },
      listStatus:[],
      listData:[
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Thanh Hiếu Bùi',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'3',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4.5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'1.5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'2.5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'3',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'3',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'2',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        }
      ]


    }
  }
  componentDidMount(){
     console.log(Date.now())
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
      io.socket.post('/post/getSpecial',{page:that.state.page},function(res,jwres){
          if(res.EC==0){
              that.setState({listStatus:res.DT,page:that.state.page+1,loadingState:false})

          }
      })

  }
  render(){
     return(

        <div className="row list-user" >
            <div className="col-md-12">
                  <div className="title-content">
                  Thủ Tướng Nguyễn Xuân Phúc
                  </div>
                  <div className="hr-title"></div>
                  <div className="col-md-12 remove-padding-col info-detail">
                       <div className="col-md-3 remove-padding-col ">
                          <div className=" info-person">
                                {/* <div className="col-md-12 remove-padding-col">
                                      <div className="infor-atribute">
                                          <div className="note">Works at </div>
                                           Hệ Điều Hanh Salon Tuyền Anh
                                      </div>
                                      <div className="infor-atribute">
                                          <div className="note">Studied at </div>
                                           Tony & Guy Hairdessing Academy
                                      </div>
                                      <div className="infor-atribute">
                                          <div className="note">Lives in </div>
                                           Bắc Giang
                                      </div>
                                      <div className="infor-atribute">
                                          <div className="note">Joined on</div>
                                           March 2013
                                             </div>
                                      <div className="infor-atribute">
                                          <div className="note">Followed</div>
                                          8,403 people

                                      </div>
                                      <div className="infor-atribute">
                                          <div className="note">Manages by </div>
                                           Tuyền Anh Hair Salon
                                      </div>
                                </div> */}
                                <div style={{paddingTop:"20px"}} className="col-md-12 remove-padding-col">
                                     <div className="col-md-4 remove-padding-col info-channel ">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                             4.5M
                                      </div>
                                      <div className="col-md-4 remove-padding-col info-channel ">
                                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                             666
                                      </div>
                                      <div className="col-md-4 remove-padding-col info-channel ">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                             1.2M
                                      </div>
                                  </div>
                                  <div style={{paddingTop:"20px"}} className="col-md-12 remove-padding-col">

                                      <div className="col-md-4 remove-padding-col info-channel ">
                                      <i className="fa fa-link" aria-hidden="true"></i>
                                      120
                                      </div>
                                      <div className="col-md-4 remove-padding-col info-channel ">
                                      <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                               456
                                      </div>
                                      <div className="col-md-4 remove-padding-col info-channel ">
                                            <i className="fa fa-commenting" aria-hidden="true"></i>
                                             999
                                      </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                             <div className="user-info-image">
                              <div className="user-action" >
                                  <img className="" src="https://dantricdn.com/thumb_w/640/2018/5/31/thu-tuong-nguyen-xuan-phuc-1-1527766780284318074732.jpg" />

                              </div>
                                <div className="text-info-user" >

                                </div>
                                <div style={{right:"-29px",borderBottom:" 1.1px dotted #0092f1"}} className="text-information" >
                                    <strong style={{color:"#0092f1"}}>47</strong> lần được nhắc đến
                                </div>
                                 <div style={{ display:'none',   marginTop: "100px",transform:" rotate(0deg)"}}  className="text-info-user" >

                                    </div>
                                        <div style={{top: '63px',right: "0px",borderBottom:" 1.1px dotted #00ce7d"}} className="text-information" >
                                             <strong style={{color:"#00ce7d"}}>46</strong> thông tin tích cực
                                     </div>
                                     <div style={{    marginTop: "206px",transform:" rotate(18deg)"}}  className="text-info-user" >

                                  </div>
                                      <div style={{top: '132px',right: "-3px",width:"132px",borderBottom:" 1.1px dotted #ff0000"}} className="text-information" >
                                          <strong style={{color:"#ff0000"}}>1</strong> Thông tin tiêu cực
                                  </div>
                                  {/* <div style={{  marginTop: "335px",
    left: "174px",transform:" rotate(44deg)"}}  className="text-info-user" >

                                  </div>
                                      <div style={{top:"181px",borderBottom:"1.1px dotted #ffbb00",right: "9px",width:"193px"}} className="text-information" >
                                          <strong style={{color:"#ffbb00"}}>789</strong> Thông tin spam
                                  </div> */}
                             </div>

                        </div>
                        <div className="col-md-3 remove-padding-col">
                            <PieChart />
                        </div>
                        <div className="col-md-3 remove-padding-col">
                            <ChartLine />
                        </div>
                      </div>
                   <div className="hr-title"></div>
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
                     {this.state.listStatus.map((status,index)=>{
                        let id = index%3
                        let typeChannel = id==0?"fa fa-facebook":id=="1" ?"fa fa-youtube-play" : "fa fa-twitter"
                            return(

                          <div key={index} className="col-md-2 status ">
                              <div className="user-info">
                                  {/* <img className="img-user" src={status.user.url_avatar} /> */}
                                  <div className="type-channel" ><i className={typeChannel} aria-hidden="true"></i></div>

                                  <div className="info">
                                        {/* <div className="name">{status.user.fullname} </div> */}
                                        <p className="time">{moment().startOf('hour').lang('vi').fromNow()}</p>

                                  </div>
                                    <div className={index%2?"type-action tieu-cuc":"type-action tich-cuc"}>{index%2?"Tiêu cực":"Tích cực"}</div>

                              </div>
                              <div className="col-md-12 hr" ></div>
                              <div className="info-status">
                                      <a target="_blank" href={status.status.url_ref}>Bài viết</a> trên <a href={status.user.url_user}>{status.user.fullname}</a>
                              </div>

                              <div className="content-status">
                                  {status.status.content}
                              </div>

                              <div className="like-comment row">
                                  <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{status.action.like}</div>
                                  <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{status.action.comment}</div>
                                  <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{status.action.share}</div>

                              </div>


                            </div>
                                )
                      }) }
                      <div className="col-md-12 pagination-web remove-padding-col info-detail list-status ">
                        <Pagination className="ant-pagination" defaultCurrent={1} total={100} /></div>

                   </div>

            </div>



        </div>
     )
  }
}
module.exports =  ListUser;

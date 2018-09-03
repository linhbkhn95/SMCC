import React from 'react';
import {NavLink} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import PieChart from './components/PieChart'
class ListUser extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      rating_half_star: 3.5,

      value5: {
        min: 14,
        max: 40,
      },
      listData:[
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
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
  render(){
     return(

        <div className="row list-user" >
            <div className="col-md-12">
                  <div className="title-content">
                     Nguyễn Văn A
                  </div>
                  <div className="hr-title"></div>
                  <div className="col-md-12 remove-padding-col info-detail">
                       <div className="col-md-3 remove-padding-col ">
                            <div className=" info-person">
                                <div className="col-md-12 remove-padding-col">
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
                                </div>
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
                              <div className="user-action" >
                                  <img className="" src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-9/38841972_2127002624179299_7207603301972443136_n.jpg?_nc_cat=0&oh=4db74a3c43cac0a1f0d1240fd3e7977a&oe=5C2AC3B6" />
                              </div>
                        </div>
                        <div className="col-md-3">
                            <PieChart />
                        </div>
                      </div>
                   <div className="hr-title"></div>

            </div>



        </div>
     )
  }
}
module.exports =  ListUser;

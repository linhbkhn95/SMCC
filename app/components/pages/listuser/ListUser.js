import React from 'react';
import {NavLink} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
class ListUser extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

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
                      Danh sách người dùng
                  </div>
                  <div className="hr-title"></div>

            </div>
            <div className="col-md-12 remove-padding-col left-filter">
                    <div className="col-md-2">

                    <div id="custom-search-input">
                        <div className="input-group col-md-12">
                        <div className="form-group filter">
                          <div className="form-group has-feedback">
                              <input type="text" className="form-control" id="inputValidation" placeholder="Tìm kiếm"/>
                              <span className="glyphicon glyphicon-search form-control-feedback"></span>
                          </div>
                       </div>
                        </div>
                     </div>
                     <div  className="col-md-12 remove-padding-col">
                          <div className="title-filter">
                               BỘ LỌC
                          </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                          <div className="filter">
                               <select className="form-control selectpicker">
                                    <option>Khu vực</option>
                               </select>
                          </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                          <div className="filter">
                          <select className="form-control">
                              <option>Giới tính</option>
                          </select>
                  </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                            <div className="filter">
                            <select className="form-control">
                                <option>Cấp độ</option>
                            </select>
                          </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          <select className="form-control">
                              <option>Tùy trọn</option>
                          </select>
                      </div>
                    </div>
                    <div  className="col-md-12 remove-padding-col">
                       <div className="filter">
                          Độ tuổi
                      </div>
                      <div className="filter">
                      <InputRange
                                draggableTrack
                                maxValue={20}
                                minValue={0}
                                onChange={value => this.setState({ value5: value })}
                                onChangeComplete={value => console.log(value)}
                                value={this.state.value5} />
                      </div>

                    </div>
                </div>

                    <div className="col-md-10 list-data">

                              {this.state.listData.map((user,index)=>{
                                return(
                                  <div className="col-md-2 remove-padding-col">
                                  <div key={index} className="user">
                                  <div className="div-avatar">
                                      <img className="avatar" src={user.url_avatar} />
                                  </div>
                                  <div className="infor">
                                        <div className="name">
                                           {user.name}
                                        </div>
                                        <div className="infor-atribute">
                                           {user.work}
                                        </div>
                                        <div className="infor-atribute">
                                        {user.studied}
                                        </div>
                                        <div className="infor-atribute">
                                        {user.live}
                                        </div>
                                        <div className="infor-atribute">
                                        {user.from}
                                        </div>

                                  </div>
                                  <div className="star">
                                        <StarRatingComponent
                                          name="rate2"
                                          editing={false}
                                          // renderStarIcon={() => <span></span>}
                                          starCount={5}
                                          value={4}
                                        />
                                  </div>
                              </div>
                              </div>

                                )
                              })}

                     </div>
            </div>
             {/* <div className="col-md-3 ">
                <ContainerLeft />
             </div>
             <div className="col-md-4">
                <Center />
             </div>
             <div className="col-md-5">
                <ContainerRight />
             </div> */}
        </div>
     )
  }
}
module.exports =  ListUser;

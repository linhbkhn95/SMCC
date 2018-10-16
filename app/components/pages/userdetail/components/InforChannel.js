
import React from 'react'
import RestfulUtils from 'app/utils/RestfulUtils'

class InforChannel extends React.Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }

  componentWillReceiveProps(nextProps){

  }
  render(){
    let {dataChannel} = this.props

    return(
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
           <div className="col-md-4 col-sm-6 col-xs-6 remove-padding-col info-channel ">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  {dataChannel.Social.number}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6  remove-padding-col info-channel ">
            <i className="fa fa-newspaper-o" aria-hidden="true"></i>
            {dataChannel.News.number}
            </div>

            <div className="col-md-4  col-sm-6 col-xs-6 remove-padding-col info-channel ">
            <i className="fa fa-forumbee" aria-hidden="true"></i>
            {dataChannel.Blog.number}
            </div>
            {/* <div className="col-md-4 remove-padding-col info-channel ">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  {dataChannel.Social.number}
            </div> */}
        </div>
        <div style={{paddingTop:"20px"}} className="col-md-12 remove-padding-col">



            <div className="col-md-4 col-sm-6 col-xs-6  remove-padding-col info-channel ">
                  <i className="fa fa-commenting" aria-hidden="true"></i>
                  {dataChannel.Forum.number}
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6  remove-padding-col info-channel ">
                  <i className="fa  fa-user-md" aria-hidden="true"></i>
                  {dataChannel.Other.number}

            </div>
      </div>
  </div>
    )
  }
}
module.exports = InforChannel

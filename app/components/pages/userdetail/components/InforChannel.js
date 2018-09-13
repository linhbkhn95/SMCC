
import React from 'react'
class InforChannel extends React.Component{
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render(){
    let {dataChannel} = this.props

    return(
      <div>
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
    )
  }
}

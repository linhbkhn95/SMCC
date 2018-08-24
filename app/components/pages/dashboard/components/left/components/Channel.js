import React from 'react';
import {NavLink} from 'react-router-dom';
import {ProgressBar} from 'react-bootstrap'
const now = 60;
const moment = 80
const progressInstance1 = <ProgressBar active bsStyle="danger" now={now} label={`${now}%`} />;
const progressInstance2 = <ProgressBar active bsStyle="success" now={moment} label={`${moment}%`} />;

class Channel extends React.Component{
	render () {
  	return (
      <div className="row module" >
          <div className="col-md-12 header-channel">
              <div className="col-md-5 text-channel">KÊNH</div>
              <div className="col-md-4 tiu-cc">TIÊU CỰC</div>
              <div className="col-md-3 tiu-cc">TÍCH CỰC</div>

          </div>
          <div className="col-md-12 channel">
           < div className="col-md-4 name-channel"><i className="fa fa-newspaper-o" aria-hidden="true"></i><div style={{lineHeight:"21px"}}>Báo chí</div></div>
              <div className="col-md-4 ">{progressInstance1}</div>
              <div className="col-md-4 ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-4 name-channel"><i className="fa fa-facebook" aria-hidden="true"></i><div style={{lineHeight:"21px"}}>Facebook</div></div>
              <div className="col-md-4 ">{progressInstance1}</div>
              <div className="col-md-4 ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-4 name-channel"><i className="fa fa-youtube" aria-hidden="true"></i><div style={{lineHeight:"21px"}}>Youtube</div></div>
              <div className="col-md-4 ">{progressInstance1}</div>
              <div className="col-md-4 ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-4 name-channel"><i className="fa fa-file-text-o" aria-hidden="true"></i><div style={{lineHeight:"21px"}}>Block</div></div>
              <div className="col-md-4 ">{progressInstance1}</div>
              <div className="col-md-4 ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-4 name-channel"><i className="fa fa-commenting-o" aria-hidden="true"></i><div style={{lineHeight:"21px"}}>Diễn đàn</div></div>
              <div className="col-md-4 ">{progressInstance1}</div>
              <div className="col-md-4 ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-4 name-channel"><i className="fa fa-user-md" aria-hidden="true"></i><div style={{lineHeight:"21px"}}>Khác</div></div>
              <div className="col-md-4 ">{progressInstance1}</div>
              <div className="col-md-4 ">{progressInstance2}</div>
          </div>
      </div>
    );
  }
}


// class DashBoard extends React.Component{

//   render(){
//      return(

//         <div className="row module" >
//              Chart

//         </div>
//      )
//   }
// }
module.exports =  Channel;

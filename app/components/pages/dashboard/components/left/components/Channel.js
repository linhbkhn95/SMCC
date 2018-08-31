import React from 'react';
import {NavLink} from 'react-router-dom';
import {ProgressBar,Collapse} from 'react-bootstrap'
import ProgressBarCustom from './ProgressBarCustom'
const now = 60;
const moment = 80
const progressInstance1 = <ProgressBar active bsStyle="danger" now={now} label={`${now}%`} />;
const progressInstance2 = <ProgressBar active bsStyle="success" now={moment} label={`${moment}%`} />;
const progressInstance3 = <ProgressBar active bsStyle="danger" now={now}  />;
const progressInstance4 = <ProgressBar active bsStyle="success" now={moment}/>;
class Channel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        MoTKKyDanh: (props.MoTKKyDanh ? props.MoTKKyDanh : false),
        collapse: {
            facebook: true,

        },
        display: {
           facebook: true,

        },

    };

}
  collapse(tab) {
    this.state.collapse[tab] = !this.state.collapse[tab];
    this.setState({ collapse: this.state.collapse })
}
	render () {
  	return (
      <div className="row module" >
          <div className="col-md-12 header-channel">
              <div className="col-md-5 text-channel">KÊNH</div>
              <div className="col-md-4 tiu-cc">TIÊU CỰC</div>
              <div className="col-md-3 tiu-cc">TÍCH CỰC</div>

          </div>

          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-newspaper-o" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Báo chí</div></div>
              <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={true} now={70} bsStyle="danger"/></div>
              <div className="col-md-3 custom-progess-success"><ProgressBarCustom showLabel={true} now={30} bsStyle="success"/></div>
          </div>
          <div style={{ display: this.state.display["facebook"] ? "block" : "none" ,backgroundColor:" #002c6e",borderRadius:"8px" }} className="col-md-12 channel parent-note">
          <div onClick={this.collapse.bind(this, 'facebook')} style={{ cursor: "pointer" }} className="col-md-6 name-channel"><i className="fa fa-facebook" style={{    cursor: "pointer"}} aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px",float:"left"}}>Facebook  </div><i style={{cursor: "pointer", cursor: "pointer", left: "8px",fontSize: "9px",lineHeight:"22px",fontWeight:"bold" }} className={!this.state.collapse["facebook"] ? "glyphicon glyphicon-menu-down" : "glyphicon glyphicon-menu-up"}></i> </div>
          <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={true} now={60} bsStyle="danger"/></div>
          <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={80} bsStyle="success"/></div>
           <Collapse in={this.state.collapse["facebook"]}>
               <div className="col-md-12 note-list">
               <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note" style={{lineHeight:"21px"}}>Fanpage</div></div>
                   <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={false} now={20} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={10} bsStyle="success"/></div>
             </div>
             <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note" style={{lineHeight:"21px"}}>Trang cá nhân</div></div>
                   <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={false} now={80} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={60} bsStyle="success"/></div>
             </div>
             <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note"  style={{lineHeight:"21px"}}>Nhóm</div></div>
                   <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={false} now={90} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={100} bsStyle="success"/></div>
             </div>
             <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note" style={{lineHeight:"21px"}}>Bình luận</div></div>
                   <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={false} now={40} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={90} bsStyle="success"/></div>
             </div>
             </div>
           </Collapse>

        </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-youtube" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Youtube</div></div>
              <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={true} now={50} bsStyle="danger"/></div>
              <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={50} bsStyle="success"/></div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-file-text-o" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Block</div></div>
              <div className="col-md-3 custom-progess-danger ">{progressInstance1}</div>
              <div className="col-md-3 custom-progess-success ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-commenting-o" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Diễn đàn</div></div>
              <div className="col-md-3 custom-progess-danger">{progressInstance1}</div>
              <div className="col-md-3 custom-progess-success ">{progressInstance2}</div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-user-md" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Khác</div></div>
              <div className="col-md-3 custom-progess-danger ">{progressInstance1}</div>
              <div className="col-md-3 custom-progess-success ">{progressInstance2}</div>
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

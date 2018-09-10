import React from 'react';
import {NavLink} from 'react-router-dom';
import {ProgressBar,Collapse} from 'react-bootstrap'
import ProgressBarCustom from './ProgressBarCustom'
import axios from 'axios'
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
        city_id:'',
        dataProgress:{
            "Group Post":{},
            "User Post":{},
            "Facebook":{},
            "Youtube":{},
            "Forum":{},
            "Fanpage Post":{},
            "News":{},
            "Comment":{}

        }

    };

}
  collapse(tab) {
    this.state.collapse[tab] = !this.state.collapse[tab];
    this.setState({ collapse: this.state.collapse })
}

componentDidMount(){
  let self = this
  let {city_id,dataProgress} = this.props

  this.setState({city_id,dataProgress})
}
componentWillReceiveProps(nextProps){
  let {city_id,dataProgress} = nextProps
  if(this.state.city_id!=city_id){
      this.setState({city_id,dataProgress})

   }
  }


	render () {
    let dataProgress = this.props.dataProgress
  	return (
      <div className="row module" >
          <div className="col-md-12 header-channel">
              <div className="col-md-5 text-channel">KÊNH</div>
              <div className="col-md-4 tiu-cc">TIÊU CỰC</div>
              <div className="col-md-3 tiu-cc">TÍCH CỰC</div>

          </div>

          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-newspaper-o" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Báo chí</div></div>
              <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={true} now={dataProgress["News"].positive} bsStyle="danger"/></div>
              <div className="col-md-3 custom-progess-success"><ProgressBarCustom showLabel={true} now={dataProgress["News"].setiment} bsStyle="success"/></div>
          </div>
          <div style={{ display: this.state.display["facebook"] ? "block" : "none" ,backgroundColor:" #002c6e",borderRadius:"8px" }} className="col-md-12 channel parent-note">
          <div onClick={this.collapse.bind(this, 'facebook')} style={{ cursor: "pointer" }} className="col-md-6 name-channel"><i className="fa fa-facebook" style={{    cursor: "pointer"}} aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px",float:"left"}}>Facebook  </div><i style={{cursor: "pointer", cursor: "pointer", left: "8px",fontSize: "9px",lineHeight:"22px",fontWeight:"bold" }} className={!this.state.collapse["facebook"] ? "glyphicon glyphicon-menu-down" : "glyphicon glyphicon-menu-up"}></i> </div>
          <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={true} now={dataProgress["Facebook"].positive} bsStyle="danger"/></div>
          <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={dataProgress["Facebook"].setiment} bsStyle="success"/></div>
           <Collapse in={this.state.collapse["facebook"]}>
               <div className="col-md-12 note-list">
               <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note" style={{lineHeight:"21px"}}>Bài viết Fanpage</div></div>
                   <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={false} now={dataProgress["Fanpage Post"].positive} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={dataProgress["Fanpage Post"].setiment} bsStyle="success"/></div>
             </div>
             <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note" style={{lineHeight:"21px"}}>Bài viết cá nhân</div></div>
                   <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={false} now={dataProgress["User Post"].positive} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={dataProgress["User Post"].setiment} bsStyle="success"/></div>
             </div>
             <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note"  style={{lineHeight:"21px"}}>Bài viết trong Nhóm</div></div>
                   <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={false} now={dataProgress["Group Post"].positive} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={dataProgress["Group Post"].setiment} bsStyle="success"/></div>
             </div>
             <div className="col-md-12 note-channel">
                   < div className="col-md-6 name-chirld-channel"> <div  className="name-note" style={{lineHeight:"21px"}}>Bình luận</div></div>
                   <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={false} now={dataProgress["Comment"].positive} bsStyle="danger"/></div>
                   <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={false} now={dataProgress["Comment"].setiment} bsStyle="success"/></div>
             </div>
             </div>
           </Collapse>

        </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-youtube" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Youtube</div></div>
              <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={true} now={dataProgress["Youtube"].positive} bsStyle="danger"/></div>
              <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={dataProgress["Youtube"].setiment} bsStyle="success"/></div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-file-text-o" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Block</div></div>
              <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={true} now={dataProgress["Youtube"].positive} bsStyle="danger" /></div>
              <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={dataProgress["Youtube"].setiment} bsStyle="success" /></div>
          </div>
          <div className="col-md-12 channel">
           < div className="col-md-6 name-channel"><i className="fa fa-commenting-o" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Diễn đàn</div></div>
              <div className="col-md-3 custom-progess-danger"><ProgressBarCustom showLabel={true} now={dataProgress["Forum"].positive} bsStyle="danger" /></div>
              <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={dataProgress["Forum"].setiment} bsStyle="success" /></div>
          </div>
          <div className="col-md-12 channel">

           < div className="col-md-6 name-channel"><i className="fa fa-user-md" aria-hidden="true"></i><div className="name-note" style={{lineHeight:"21px"}}>Khác</div></div>
              <div className="col-md-3 custom-progess-danger "><ProgressBarCustom showLabel={true} now={dataProgress["Youtube"].positive} bsStyle="danger" /></div>
              <div className="col-md-3 custom-progess-success "><ProgressBarCustom showLabel={true} now={dataProgress["Youtube"].setiment} bsStyle="success" /></div>
          </div>
      </div>
    );
  }
}





module.exports =  Channel;

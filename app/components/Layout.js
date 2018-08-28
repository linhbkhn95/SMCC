// var Menu = require('Menu');
// var Main = require('Main');
var Nav = require('./Nav.js');
var Menu = require('./Menu.js');
var React = require('react');
var { connect } = require('react-redux');
import { ToastContainer, toast } from 'react-toastify';
class Layout extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="">
        <div className="" >
          <Nav />
          <div className="clearfix"></div>
          {/* <div className="container jumbotron"> */}
          <div className="col-md-12">
            {this.props.children}
          </div>
          <ToastContainer />
        </div>
      </div>
    )
  }
}
module.exports = Layout;
  // <div className="container">

  //                       <div className="row">
  //                           <Nav />
  //                       </div>
  //                       <div className="">
  //                            <div style={{paddingRight:"0px"}} className="col-md-2">
  //                                <Menu />
  //                            </div>
  //                         <div style={{paddingLeft:"0px",paddingRight:"0px"}} className="col-md-10" >
  //                             {this.props.children}
  //                          </div>
  //                   </div>

  //              </div>

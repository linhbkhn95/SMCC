// var Menu = require('Menu');
// var Main = require('Main');
var Nav = require('./Nav.js');
var Menu = require('./Menu.js');
var React = require('react');
var { connect } = require('react-redux');
import { ToastContainer, toast } from 'react-toastify';
import SideBar from './SideBar'
class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  onClick = () => {
    this.setState({
      visible: !this.state.visible
    })
    console.log('ab')
  }
  render() {
    const paddingLeft = this.state.visible ? '500px' : '0px';
    return (
      <div className="">
        <SideBar visible={this.state.visible} />
        <div className="" style={{ paddingLeft }}>
          <Nav onClick={this.onClick} />
          <div className="clearfix"></div>
          {/* <div className="container jumbotron"> */}
          <div className="col-md-12" onClick={() => this.setState({ visible: false })}>
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

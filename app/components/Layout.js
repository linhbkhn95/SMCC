// var Menu = require('Menu');
// var Main = require('Main');
var Nav = require('./Nav.js');
import Menu from './Menu.js';
var React = require('react');
import LayoutMaterial from './LayoutMaterial'
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
          {/* <LayoutMaterial /> */}
          <Menu />
          {/* <Nav /> */}
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

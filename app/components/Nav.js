
import {NavLink,Link} from 'react-router-dom';
import React from 'react';
import {NavDropdown,Navbar,NavItem,MenuItem,Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
  class NavContent extends React.Component {

  render() {


    return (

           <header className="header">

                    {/* <Navbar fixedTop={true} inverse collapseOnSelect>
                      <Navbar.Header>
                        <Navbar.Brand> */}
                      <div className="col-md-12">
                         <div className="div-header">
                           <div className="div-logo"><img className="logo" src="./images/0dd4ccc0cf89e354e9d24d21c771def030181d83.png" /> </div>
                           <div className="div-title">
                              <div className="title-web" href="#brand">TRUNG TÂM PHÂN TÍCH XU HƯỚNG MẠNG XÃ HỘI</div>
                              <div className="text-clock">  <i className="fa fa-clock-o clock" aria-hidden="true"></i>24/08/2018 - 17h:30</div>
                            </div>

                            <div className="pull-right div-filter">
                              <div className="header-chart">
                              <div className="type-filter active">
                                      <div className="text" ><i className="fa fa-filter" aria-hidden="true"></i>Filter</div>
                                    </div>
                                    <div className="btn-view type-filter ">
                                          <div className="text" ><i className="fa fa-eye" aria-hidden="true"></i>View</div>
                                    </div>
                              </div>
                          </div>
                          </div>

                        {/* </Navbar.Brand>
                        <Navbar.Toggle />
                      </Navbar.Header> */}
                      <Navbar.Collapse>
                        {/* <Nav>
                          <NavItem eventKey={1} href="#">
                            Câu hỏi
                          </NavItem>
                          <NavItem eventKey={2} href="#">
                            Tag
                          </NavItem>

                        </Nav> */}
                        {/* <Nav pullRight>
                         <NavItem eventKey={2} href="#">
                         <div className="user-avatar">
                            <img className="img-user" src="https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-1/c0.16.80.80/p80x80/28577300_2016525228560373_5392331788461853926_n.jpg?oh=821bf3b7ee04b7f7ffbd02e0cbc850bb&oe=5B037648" />
                        </div>
                        <div style={{float:"left"}} className="">
                            <div className="user-name">
                                Linh td
                            </div>

                        </div>
                          </NavItem>

                          <NavItem style={{clear:""}} eventKey={2} href="#">
                                 <i className="fa fa-user-plus" aria-hidden="true"></i>
                         </NavItem>
                         <NavItem eventKey={1} href="#">
                           <i className="fa fa-home" aria-hidden="true"></i>
                          </NavItem>

                          <NavItem eventKey={2} href="#">
                              <i className="fa fa-users" aria-hidden="true"></i>
                          </NavItem>
                          <NavItem eventKey={2} href="#">
                              <i className="fa fa-bell-o" aria-hidden="true"></i>
                          </NavItem>
                           <NavDropdown eventKey={3}  id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Cài đặt</MenuItem>

                            <MenuItem eventKey={3.2}>Đăng xuất</MenuItem>
                          </NavDropdown>

                        </Nav> */}
                      </Navbar.Collapse>
                    </div>;

          </header>


    );
  }
}


 module.exports =connect(function(state){
   return{
       auth:state.auth,
       count :state.shoppingCart.count
   }})
  (NavContent);

import React from 'react';
import {NavLink} from 'react-router-dom';
import LeftFilter from './components/LeftFilter'
import ListUserContainer from './components/ListUserContainer'
class ListUser extends React.Component{
 
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
           
                    <LeftFilter />
                    <ListUserContainer />
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

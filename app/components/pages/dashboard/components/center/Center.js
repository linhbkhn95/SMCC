import React from 'react';
import {NavLink} from 'react-router-dom';
import HeaderFilter from './components/HeaderFilter'
class Center extends React.Component{

  render(){
     return(

        <div className="center" >
              <HeaderFilter />
        </div>
     )
  }
}
module.exports =  Center;

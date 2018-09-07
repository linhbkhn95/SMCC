import React from 'react';
import {NavLink} from 'react-router-dom';
import HeaderFilter from './components/HeaderFilter'
import Map from './components/Map'
class Center extends React.Component{

  render(){
     return(

        <div className="center" >
              <HeaderFilter />
              {/* <Map /> */}
        </div>
     )
  }
}
module.exports =  Center;

import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListStatus'
import Chart from './Chart'
import RestfulUtils from 'app/utils/RestfulUtils'
import listcity from 'app/utils/country.json'
class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          city_id:''
    }
  }
  componentDidMount(){
    if(this.props.city_id&&this.props.city_id!=0)
        this.setState({city:listcity[this.props.city_id]})
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.city_id&&nextProps.city_id!=this.state.city_id)
        this.setState({city:listcity[nextProps.city_id]})
  }
	render () {
  	return (
      <div className="comment col-md-12 module" >
         <div className="col-md-12 header-chart">
              <div className="pull-left">
                  <div className="name-city">{this.state.city}</div>
              </div>
              <div className="pull-right filter-comment">
                  <div className="type-filter active">
                  <div className="text" >Tất cả</div>
                </div>
                <div className="type-filter">
                    <div className="text" >Tích cực</div>
                </div>
                <div className="type-filter">
                    <div className="text" >Tiêu cực</div>
                </div>
              </div>
         </div>
         <ListStatus city_id ={this.props.city_id}/>
      </div>
    );
  }
}



module.exports =  Comment;

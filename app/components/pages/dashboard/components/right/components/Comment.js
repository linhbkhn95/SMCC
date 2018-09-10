import React from 'react';
import {NavLink} from 'react-router-dom';
import ListStatus from './ListStatus'
import Chart from './Chart'
import RestfulUtils from 'app/utils/RestfulUtils'
import listcity from 'app/utils/country.json'
import index from 'react-google-charts';
class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
          city_id:'',
          listFilter:[
              {
                value:2,
                className:'type-filter active',
                label:'Tất cả'
              },
              {
                value:3,
                className:'type-filter',
                label:'Tích cực'
              },
              {
                value:1,
                className:'type-filter ',
                label:'Tiêu cực'
              },
          ],
          
          valueActive:2
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
  filter(value){
    console.log('tìm kiém',value);

    let listFilter = this.state.listFilter
    for(var i=0;i<listFilter.length;i++){
      if(value==listFilter[i].value)
        listFilter[i].className = "type-filter active"
      else
        listFilter[i].className = "type-filter"
    }
    this.props.onChangeSe(value)
    console.log('listfilet',listFilter)
    this.setState({valueActive:value,listFilter})
  }
	render () {
    let listFilter =  this.state.listFilter
    let self = this
  	return (
      <div className="comment col-md-12 module" >
         <div className="col-md-12 header-chart">
              <div className="pull-left">
                  <div className="name-city">{this.state.city}</div>
              </div>
              <div className="pull-right filter-comment">
                {listFilter.map((filter,index)=>{
                   let active  = filter.value==self.state.valueActive

                   return(
                       active?<div key={index}  className={filter.className}>
                               <div className="text" >{filter.label}</div>
                           </div>:
                      <div key={index}    onClick={this.filter.bind(this,filter.value)}  className={filter.className}>
                      <div className="text" >{filter.label}</div>
                </div>
                   )
                })}
                  {/* <div className="type-filter active">
                  <div className="text" >Tất cả</div>
                </div>
                <div className="type-filter">
                    <div className="text" >Tích cực</div>
                </div>
                <div className="type-filter">
                    <div className="text" >Tiêu cực</div>
                </div> */}
              </div>
         </div>
         <ListStatus valueActive={this.state.valueActive} city_id ={this.props.city_id}/>
      </div>
    );
  }
}



module.exports =  Comment;

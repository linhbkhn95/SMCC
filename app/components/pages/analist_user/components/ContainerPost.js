import React from 'react';
import {NavLink} from 'react-router-dom';
import ListPost from './ListPost'
import RestfulUtils from 'app/utils/RestfulUtils'
import listcity from 'app/utils/country.json'
import index from 'react-google-charts';

var Select = require('react-select');

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
          city:{value:27,label:"Hà Nội"},
          listOptionSelect:[],


          valueActive:2
    }
  }
  setOptionSelect(){
    let i=0;
    let listOptionSelect =[]
    for(var index in listcity) {
        listOptionSelect[i++] = {value:index,lable:listcity[index]}
    }

    this.setState( {listOptionSelect})
  }
  onChangeSelect(type,e) {
    this.state[type] = e

    if(!e){
       this.state[type]={value:27,label:"Hà Nội"}
    }
    this.props.onchangeCity(this.state.city)
    this.setState(this.state)
  }
  async getOptionsSelect(type,input) {
    let i=0;
    let listOptionSelect = []
    for(var index in listcity) {
        listOptionSelect[i++] = {value:index,label:listcity[index]}
    }

    return { options: listOptionSelect }
  }
  componentDidMount(){
    this.setOptionSelect()
    if(this.props.city_id&&this.props.city_id!=0)
        this.setState({city:listcity[this.props.city_id]})
  }
  // componentWillReceiveProps(nextProps){
  //   if(nextProps.city_id&&nextProps.city_id!=this.state.city_id){
  //       let city = {
  //         value:nextProps.city_id,
  //         label:listcity[nextProps.city_id]
  //       }
  //       this.setState({city})
  //   }
 // }
  // filter(value){

  //   let listFilter = this.state.listFilter
  //   for(var i=0;i<listFilter.length;i++){
  //     if(value==listFilter[i].value)
  //       listFilter[i].className = "type-filter active"
  //     else
  //       listFilter[i].className = "type-filter"
  //   }
  //   // this.props.onChangeSe(value)
  //   this.setState({valueActive:value,listFilter})
  // }
 

	render () {
    let listFilter =  this.state.listFilter
    let self = this
  	return (
      <div className="comment col-md-12" >


         <ListPost d1={this.props.d1} d2={this.props.d2} valueActive={this.state.valueActive} city_id ={this.props.city_id}/>
      </div>
    );
  }
}



module.exports =  Comment;

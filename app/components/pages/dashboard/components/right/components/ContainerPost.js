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
  componentWillReceiveProps(nextProps){
    if(nextProps.city_id&&nextProps.city_id!=this.state.city_id){
        let city = {
          value:nextProps.city_id,
          label:listcity[nextProps.city_id]
        }
        this.setState({city})
    }
  }
  filter(value){

    let listFilter = this.state.listFilter
    for(var i=0;i<listFilter.length;i++){
      if(value==listFilter[i].value)
        listFilter[i].className = "type-filter active"
      else
        listFilter[i].className = "type-filter"
    }
    // this.props.onChangeSe(value)
    this.setState({valueActive:value,listFilter})
  }
	render () {
    let listFilter =  this.state.listFilter
    let self = this
  	return (
      <div className="comment col-md-12 module" >
         <div className="col-md-12 header-chart">
              <div style={{    paddingRight: "5px",
    paddingLeft: "2px"}} className="pull-left col-md-4 remove-padding-col">

              <Select.Async
                                           name="form-field-name"
                                           placeholder={"Thành phố"}
                                           loadOptions={this.getOptionsSelect.bind(this,'city')}

                                           value={this.state.city}
                                           onChange={this.onChangeSelect.bind(this,'city')}
                                           clearable={true}
                                           options={this.state.listOptionSelect}

                                           // onFocus={this.handleOnFocus.bind(this)}
                                           backspaceRemoves={false}
                                           // onOpen={this.onOpen.bind(this)}
                                           cache={false}
                                       />
                  {/* <div className="name-city">{this.state.city}</div> */}
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
         <ListPost d1={this.props.d1} d2={this.props.d2} valueActive={this.state.valueActive} city_id ={this.props.city_id}/>
      </div>
    );
  }
}



module.exports =  Comment;

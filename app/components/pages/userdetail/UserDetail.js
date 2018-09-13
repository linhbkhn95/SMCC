import React from 'react';
import {NavLink} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import PieChart from './components/PieChart'
import ChartLine from './components/ChartTendencyComment'
import moment from 'moment'
var datedemo=1536072804565
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import DropdownUtils from 'app/utils/input/DropdownUtils'
import RestfulUtils from 'app/utils/RestfulUtils'
import InforChannel from './components/InforChannel'
import ListPost from './components/ListPost'
import InfoPerSon from './components/InfoPerSon'
class ListUser extends React.Component{
  constructor(props) {
    super(props);

    this.state = {

      items: 10,
      page:1,
      loadingState: false,
      fulldata:false,
      rating_half_star: 3.5,

      value5: {
        min: 14,
        max: 40,
      },
      listStatus:[],

      user:{}

    }
  }
  componentDidMount(){
     console.log(Date.now())
    let that  = this
     $(".list-status").scroll(function () {
       console.log('vao')
      var $this = $(this);

          // if( ( ($(document).height() - $(window).height())-$(window).scrollTop())<50&&!self.state.fulldata) {
          //   if(($("#list-status").height() - $this.scrollTop()) -$this.height()<50&&!that.state.fulldata) {

          //    console.log('load',$("#list-status").height(),$this.scrollTop(),$this.height())
          //     that.loadMoreItems();
          // }
      });



  }

  onChangeDropdown(type,data){



     this.state.user[type] = data.value;

     this.setState(this.state)
 }
  render(){
     return(

        <div className="row list-user" >
            <div className="col-md-12">
                   <div style={{marginBottom:"9px"}} className="col-md-2 remove-pading-col">
                        <DropdownUtils className="form-control title-content"  typeValue="id" typeLabel="display_name" value={this.state.user.topic} callApi={true} onChange={this.onChangeDropdown.bind(this)} type="topic"  CDID="" urlApi="/user/get_all_info" optionFilter={{}} />
                  </div>
                  <div className="hr-title"></div>
                  <InfoPerSon topic={this.state.user.topic} />
                   <div className="hr-title"></div>
                   </div>

                   <ListPost topic={this.state.user.topic} />

            </div>



     )
  }
}
module.exports =  ListUser;

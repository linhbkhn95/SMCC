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
      listData:[
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Thanh Hiếu Bùi',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'3',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4.5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'1.5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'2.5',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'3',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'3',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'2',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        },
        {
          url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
          name:'Trịnh Đức Bảo Linh',
          studied:'Studied at Hust',
          live:'Lives in Ha Noi',
          star:'4',
          from:'From Ha Noi, Viet Nam',
          work:'Works at Điều hành'
        }
      ],
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

        console.log('  componentDidMount(){')
      io.socket.post('/post/getSpecial',{page:that.state.page},function(res,jwres){
          if(res.EC==0){
              that.setState({listStatus:res.DT,page:that.state.page+1,loadingState:false})

          }
      })
      this.get_all_info();

  }
  get_all_info(){
      RestfulUtils.post('/user/get_all_info',{}).then((res)=>{

      })
  }
  onChangeDropdown(type,data){



     this.state.user[type] = data.value;

     this.setState(this.state)
 }
  render(){
     return(

        <div className="row list-user" >
            <div className="col-md-12">
                   <div style={{marginBottom:"9px"}} className="col-md-2">
                        <DropdownUtils className="form-control title-content"  typeValue="id" typeLabel="display_name" value={this.state.user.user_id} callApi={true} onChange={this.onChangeDropdown.bind(this)} type="user_id"  CDID="" urlApi="/user/get_all_info" optionFilter={{}} />
                  </div>
                  <div className="hr-title"></div>
                  <InfoPerSon />
                   <div className="hr-title"></div>
                   </div>
                
                   <ListPost />

            </div>



     )
  }
}
module.exports =  ListUser;

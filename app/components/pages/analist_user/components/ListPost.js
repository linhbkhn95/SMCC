import React from 'react';
import {NavLink} from 'react-router-dom';
import RestfulUtils from 'app/utils/RestfulUtils'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Select from 'rc-select';
import localeInfo from 'rc-pagination/lib/locale/vi_VN';
import Post from './Post'
import moment from 'moment'
var datedemo=1536072804565
class ListPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options:[],
      subject:null,

      items: 10,
      page:1,
      loadingState: false,
      fulldata:false,
       listStatus:[

        ],
        city_id:0,
        showLoading:false,
        pager:0,
        // pageActive:1
        pagesize:6,
        d1:'',
        d2:''
    }
  }
  getDataWithCity(city_id,page,pagesize,valueActive,d1,d2){
    let that = this
    this.setState({showLoading:true})
    RestfulUtils.post('/dashboard/getDataWithCity',{city_id,page,pagesize,se:valueActive,d1,d2}).then((res)=>{
          let pager = parseInt(res.pager)
          that.setState({listStatus:res.results,pager,page,pagesize,d1,d2,showLoading:false})

    })
}
// componentDidMount(){
//   this.getDataWithCity('',1,6,'1,2,3','2018-09-20','2018-09-20')
// }
  // componentWillReceiveProps(nextProps){
  //     let {city_id,valueActive,d1,d2} = nextProps
  //     if((this.state.city_id!=city_id)||(d1!=this.state.d1||d2!=this.state.d2)||(this.props.valueActive!=nextProps.valueActive)){
  //         // this.setState({city_id,page:1,pagesice:6,d1,d2})
  //         console.log('datacity',city_id)
  //          this.getDataWithCity(city_id,1,6,valueActive,d1,d2)
  //     }

  // }


 onChange(current, pageSize) {
  // console.log('onChange:current=', current);
  // console.log('onChange:pageSize=', pageSize);
  let {d1,d2} = this.props
  this.getDataWithCity(this.state.city_id,current,pageSize,this.props.valueActive,d1,d2)

  }
  componentDidMount(){
    this.intervalId = setInterval( this.getDataWithCity.bind(this,'',1,6,'1,2,3','2018-09-20','2018-09-20'), 10000);

 }
 componentWillUnmount(){
   // $('#map').empty()

   clearInterval(this.intervalId);
 }
	render () {
    let {listStatus} = this.state
    let ListPost = listStatus.length>0?

    listStatus.map((status,index)=>{

      let typeChannel = "fa fa-facebook"
      let isSentiment = status.sentiment ==1
      return(
        <Post key={index} status={status} />
      )
    }):<div style={{
      textAlign: "center",
      padding: "12px",
      fontSize: "13px",
      color: "#7a887a"
   }}></div>
  	return (
        <div className="container-list">
               {this.state.showLoading?<div className="loading-progress"> <CircularProgress size={50} /></div>:null}

         <div style={{maxHeight:"72vh",paddingReft: "15px",paddingRight: "15px"}}  id="list-status list-user" className="col-md-12 list-status">
            {ListPost}

             {/* <ListPost /> */}
            </div>
            <div style={{textAlign:"center",fontSize:"12px"}}>{this.state.loadingState ? <p style={{fontSize:"12px"}} className="loading"> đang tải dữ liệu..</p> : ""} </div>


            <div style={{display:"flex",justifyContent:"center",paddingTop:"10px"}} className="col-md-12">
            <Pagination className="ant-pagination"

          defaultPageSize={6}
          defaultCurrent={1}

          onChange={this.onChange.bind(this)}
          total={this.state.pager}
          locale={localeInfo}
           style={{color:"white"}}
            />

            </div>

         </div>
    );
  }
}

module.exports =  ListPost;
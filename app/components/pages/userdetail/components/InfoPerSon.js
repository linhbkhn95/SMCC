import React from 'react'


import 'react-input-range/lib/css/index.css'
import PieChart from './PieChart'
import ChartLine from './ChartTendencyComment'
import moment from 'moment'
var datedemo=1536072804565
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import DropdownUtils from 'app/utils/input/DropdownUtils'
import RestfulUtils from 'app/utils/RestfulUtils'
import InforChannel from './InforChannel'
module.exports =class InfoPerSon extends React.Component{


  constructor(props){
    super(props);
    this.state ={
      topic:'',
      data: {
        dataPieChart:[
          ['Task', 'Hours per Day'],
          ['Tích cực', 4],
          ['Tiêu cực', 2],
          ['Nhắc đến', 2],
          ['Spam', 2],
        ],
        Total: {
            "source_id": 0,
            "number": 835
        },
        News: {
            "source_id": 1,
            "number": 107
        },
        Social: {
            "source_id": 2,
            "number": 545
        },
        Blog: {
            "source_id": 3,
            "number": 11
        },
        Other: {
            "source_id": 4,
            "number": 172
        },
        Forum: {
            "source_id": 12,
            "number": 0
        },

      }
    }
  }
  get_new_statistic_domain(topic){
    let self = this
    RestfulUtils.post('/user/get_new_statistic_daily',{topic}).then((res)=>{
          if(res.EC==0)
            self.setState({data:res.DT,topic})

    })
  }

  componentWillReceiveProps(nextProps){
    let {topic}  = nextProps;
    if(topic!=this.state.topic&&topic){
        this.get_new_statistic_domain(topic)
    }

  }
  render(){
    return(

      <div className="col-md-12 remove-padding-col info-detail">
      <div className="col-md-3 remove-padding-col ">
           <InforChannel dataChannel={this.state.data} ></InforChannel>
       </div>
       <div className="col-md-3">
            <div className="user-info-image">
             <div className="user-action" >
                 <img className="" src="https://dantricdn.com/thumb_w/640/2018/5/31/thu-tuong-nguyen-xuan-phuc-1-1527766780284318074732.jpg" />

             </div>
               <div className="text-info-user" >

               </div>
               <div style={{right:"-29px",borderBottom:" 1.1px dotted #0092f1"}} className="text-information" >
                   <strong style={{color:"#0092f1"}}>47</strong> lần được nhắc đến
               </div>
                <div style={{ display:'none',   marginTop: "100px",transform:" rotate(0deg)"}}  className="text-info-user" >

                   </div>
                       <div style={{top: '63px',right: "0px",borderBottom:" 1.1px dotted #00ce7d"}} className="text-information" >
                            <strong style={{color:"#00ce7d"}}>46</strong> thông tin tích cực
                    </div>
                    <div style={{    marginTop: "206px",transform:" rotate(18deg)"}}  className="text-info-user" >

                 </div>
                     <div style={{top: '132px',right: "-3px",width:"132px",borderBottom:" 1.1px dotted #ff0000"}} className="text-information" >
                         <strong style={{color:"#ff0000"}}>1</strong> Thông tin tiêu cực
                 </div>

            </div>

       </div>
       <div className="col-md-3 remove-padding-col">
           <PieChart dataPieChart  ={this.state.data.dataPieChart} />
       </div>
       <div className="col-md-3 remove-padding-col">
           <ChartLine topic ={this.props.topic} />
       </div>
     </div>
    )
  }
}


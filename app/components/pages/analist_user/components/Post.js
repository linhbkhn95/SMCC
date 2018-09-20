import {NavLink} from 'react-router-dom';
import RestfulUtils from 'app/utils/RestfulUtils'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Select from 'rc-select';
import localeInfo from 'rc-pagination/lib/locale/vi_VN';

import React from 'react'
import moment from 'moment'
class Post extends React.Component{
  render(){
    let status = this.props.status;

    let typeChannel = "fa fa-facebook"
    let isSentiment = status.sentiment ==1
    return(
      <div style={{marginLeft:"0px"}} className="col-md-12 status ">
      <div className="user-info col-md-12 remove-padding-col">
          <div className="col-md-1 remove-padding-col"><img className="img-user" src={status.author_avatar_url} /></div>
          <div  className="info col-md-11">
                <div className="name">{status.title} </div>

            </div>
      </div>
      <div className="info-status">
                <a style={{marginRight:"3px"}} target="_blank" href={status.result_open_link}>Bài viết</a> trên <a target="_blank" style={{marginLeft:"3px"}} href={status.author_url}>{status.author} </a>
      </div>
      <div className="content-status">
          {status.content_oryginal}
      </div>


      <div className="like-comment row">
         <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{status.like_count?status.like_count:0}</div>
         <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{status.response?status.response:0}</div>
         <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{status.shares_count?status.shares_count:0}</div>

      </div>
      <div className="col-md-12 hr" ></div>
      <div className="user-info">
      {/* <img className="img-user" src={status.user.url_avatar} /> */}
      <div className="type-channel" ><i className={typeChannel} aria-hidden="true"></i></div>

      <div style={{float:"left"}} className="">
            {/* <div className="name">{status.user.fullname} </div> */}
            <p className="time">{moment(status.created_date).lang('vi').fromNow()}</p>

      </div>
        <div className={isSentiment?"type-action tieu-cuc":"type-action tich-cuc"}>{isSentiment?"Tiêu cực":"Tích cực"}</div>

     </div>
  </div>

    )
  }
}

module.exports = Post

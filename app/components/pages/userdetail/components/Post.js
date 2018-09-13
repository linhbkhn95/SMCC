import React from 'react'
import moment from 'moment'
var datedemo=1536072804565
class Post extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        post :[]
    }
  }
  render(){
      let post = this.props.post
      let id = 3%3
      let {source_id} = post
      let typeChannel = source_id==12?"fa fa-facebook":source_id==1 ?"fa fa-newspaper-o" :source_id==3?"fa fa-forumbee":source_id==4?"fa fa-commenting-o" :"fa fa-user-md"
      let isSentiment = post.sentiment == -1


      return(
        <div className="col-md-2 status ">
          <div className="user-info">
            {/* <img className="img-user" src={status.user.url_avatar} /> */}
            <div className="type-channel" ><i className={typeChannel} aria-hidden="true"></i></div>

            <div style={{float:"left",marginTop:"4px"}} className="info">
                  {/* <div className="name">{status.user.fullname} </div> */}
                  <p className="time">{moment(status.receive_time).lang('vi').fromNow()}</p>

            </div>
              <div className={isSentiment?"type-action tieu-cuc":"type-action tich-cuc"}>{isSentiment?"Tiêu cực":"Tích cực"}</div>

        </div>
        <div className="title-post">{post.title} </div>
        <div style={{marginTop:"10px"}} className="col-md-12 hr" ></div>
        <div className="info-status">
                <a target="_blank" href={post.url}>Bài viết</a> trên <a href="#">{post.domain}</a>
        </div>

        <div className="content-status">
            {post.snippet}
        </div>

        <div className="like-comment row">
            <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{post.like}</div>
            <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{post.comment}</div>
            <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{post.share}</div>

        </div>


      </div>
      )
  }
}

module.exports = Post

import React from 'react'
class ListPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        post :[]
    }
  }
  render(){
      let post = this.props.post
      let id = this.props.key%3
      let typeChannel = id==0?"fa fa-facebook":id=="1" ?"fa fa-youtube-play" : "fa fa-twitter"
      return(
        <div className="col-md-2 status ">
          <div className="user-info">
            {/* <img className="img-user" src={status.user.url_avatar} /> */}
            <div className="type-channel" ><i className={typeChannel} aria-hidden="true"></i></div>

            <div style={{float:"left"}} className="info">
                  {/* <div className="name">{status.user.fullname} </div> */}
                  <p className="time">{moment().startOf('hour').lang('vi').fromNow()}</p>

            </div>
              <div className={index%2?"type-action tieu-cuc":"type-action tich-cuc"}>{this.props.key%2?"Tiêu cực":"Tích cực"}</div>

        </div>
        <div className="col-md-12 hr" ></div>
        <div className="info-status">
                <a target="_blank" href={post.status.url_ref}>Bài viết</a> trên <a href={post.user.url_user}>{post.user.fullname}</a>
        </div>

        <div className="content-status">
            {post.status.content}
        </div>

        <div className="like-comment row">
            <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{post.action.like}</div>
            <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{post.action.comment}</div>
            <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{post.action.share}</div>

        </div>


      </div>
      )
  }
}

module.exports = Post

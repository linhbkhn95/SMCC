import React from 'react';
import {NavLink} from 'react-router-dom';


class ListStatus extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       listStatus:[
         {
           user:{
              url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
              fullname:"Trịnh Linh",
              user_user:"#"
           },
           status:{
                content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
                url_ref:"#",

           },
           action:{
              like:"1.2K",
              comment:"456",
              share:"1.3K"
           }
        },
        {
          user:{
             url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
             fullname:"Trịnh Linh",
             user_user:"#"
          },
          status:{
               content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
               url_ref:"#",

          },
          action:{
             like:"1.2K",
             comment:"456",
             share:"1.3K"
          }
       },
       {
        user:{
           url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
           fullname:"Trịnh Linh",
           user_user:"#"
        },
        status:{
             content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
             url_ref:"#",

        },
        action:{
           like:"1.2K",
           comment:"456",
           share:"1.3K"
        }
       },
       {
        user:{
           url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
           fullname:"Trịnh Linh",
           user_user:"#"
        },
        status:{
             content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
             url_ref:"#",

        },
        action:{
           like:"1.2K",
           comment:"456",
           share:"1.3K"
        }
       },
       {
        user:{
           url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
           fullname:"Trịnh Linh",
           user_user:"#"
        },
        status:{
             content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
             url_ref:"#",

        },
        action:{
           like:"1.2K",
           comment:"456",
           share:"1.3K"
        }
       },
       {
        user:{
           url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
           fullname:"Trịnh Linh",
           user_user:"#"
        },
        status:{
             content:"Thưa các bạn thanh niên, cách đây 27 năm, ngày 26/3/1991 sau khi bước chân vào học …",
             url_ref:"#",

        },
        action:{
           like:"1.2K",
           comment:"456",
           share:"1.3K"
        }
       }
       ]
    }
  }
	render () {
    let {listStatus} = this.state
  	return (

         <div className="col-md-12 list-status">
             {listStatus.map((status)=>{
               return(
                <div className="col-md-4 status ">
                <div className="user-info">
                   <img className="img-user" src={status.user.url_avatar} />
                    <div className="info">
                          <div className="name">{status.user.fullname} </div>
                          <div className="title-facbook">Facbook</div>
                    </div>
                </div>
                <div className="content-status">
                    {status.status.content}
                </div>
                <div className="info-status">
                      <a href={status.url_ref}>Bài viết</a> trên <a href={status.user.url_user}>{status.user.fullname}</a> </div>

                <div className="like-comment row">
                   <div className="action"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>{status.action.like}</div>
                   <div className="action"><i className="fa fa-commenting-o" aria-hidden="true"></i>{status.action.comment}</div>
                   <div className="action"><i className="fa fa-share" aria-hidden="true"></i>{status.action.share}</div>

                </div>
            </div>
               )
             })}

         </div>
    );
  }
}

module.exports =  ListStatus;

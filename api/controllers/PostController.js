/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Ioutput = require('../common/OutputInterface.js');
var RestfulHandler = require('../common/RestfulHandler');
var processingserver = require('../commonwebuser/ProcessingServer');
var LogHelper = require('../common/LogHelper.js');
module.exports = {
  getListPost:function(req,res){
    // if (!req.isSocket) {
    //     sails.log.debug('no socket');
    //     return res.badRequest();
    // }
    // if (req.isSocket) {
    //     // If this code is running, it's made it past the `isAdmin` policy, so we can safely
    //     // watch for `.publishCreate()` calls about this model and inform this socket, since we're
    //     // confident it belongs to a logged-in administrator.
    //     sails.log.debug('is socket');
    //     //để  đăng kí sự kiện lăng nghe model Command thay đổi kích hoạt sự kiện on('command') bên phía client
    //     Post.watch(req);
    // }

    // let pagesize = req.body.pagesize||10
    // let page = req.body.page||1
    // let listsubject = req.body.listsubject||[]
    // let result  = listsubject.map((item)=>{
    //     return item.value

    // })
    // let dataQuery = {};

    // if(listsubject.length>0)
    //     dataQuery.subject=result

    //     console.log('datqẻy',dataQuery,pagesize,page)

    //   Post.find({where:{sort:"createdAt DESC"}}).where(dataQuery).paginate({ limit: pagesize, page: page }).exec(function(err,list){
    //             if(err){

    //             }

    //             Promise.all(list.map((item)=>{

    //                 return new Promise(async(resolve,reject)=>{

    //                     if(item.userId_wall){
    //                         let userWall = await User.findOne({id:item.userId_wall,select:['fullname','username','url_avatar']});
    //                         item.userWall = userWall

    //                     }
    //                     let userId = req.session.user?req.session.user.id:''
    //                     item.userLikePost = false

    //                     let likePost = await Likepost.findOne({postId:item.id,userId});
    //                     if(likePost)
    //                        item.userLikePost = likePost.status?true:false


    //                     let userPost = await User.findOne({id:item.userId_post,select:['fullname','username','url_avatar']});
    //                     item.userPost = userPost


    //                     let subjectId = item.subject
    //                     let subject
    //                     subject = await Subject.findOne({id : subjectId})
    //                     if(subject){
    //                             item.subject = subject;
    //                     }


    //                     else{
    //                         item.subject = {
    //                             subjectId,
    //                             subjectname:"Chưa rõ"
    //                         }
    //                     }
    //                     resolve(item)
    //                 })
    //         }))
    //         .then((response)=>{
    //             return res.send(OutputInterface.success(response))
    //         })
    //             // res.send({DT:listPost})
    //         })
           let result = {
             EC:0,
             DT :[
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
            }},
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
            ]
           }

           res.send(result)
   },
   test:function(req,res){

    let body={
      usermame:'adv',
      password:'aaa'
    }
   var data = {
     'data':body,
     'action':'/authentication/login'
   };

          processingserver.callAPI(data, async function (err, rs) {



                return res.send(rs);

        });
   },
   get:function(req,res){
     let body={
       usermame:'adv',
       password:'aaa'
     }
    var data = {
      'data':body,
      'action':'/authentication/login'
    };

      processingserver.callAPIWithUrl( async function (err, rs) {



            return res.send(rs);

    });
}
};


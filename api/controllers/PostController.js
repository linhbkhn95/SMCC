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
                    content:"Các em sinh viên và công nhân thuê phòng trọ lưu ý lưu ý nhé …",
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
                  content:"Bọn óc  …",
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
   getSpecial:function(req,res){
    let result = {
      EC:0,
      DT :[
        {
          user:{
             url_avatar:"https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7",
             fullname:"Thanh Hiếu Bùi",
             user_user:"#"
          },
          status:{
               content:"Anh em có tiền đầu tư vào TTC của Đặng Văn Thành quốc tịch Trung Quốc nhé …",
               url_ref:"https://www.facebook.com/nguoibuon.gio.9/posts/1955462491178701",

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
            fullname:"Hồng Thái hoàng",
            user_user:"#"
         },
         status:{
              content:"Các em sinh viên và các bạn công nhân phải thuê phòng trọ lưu ý nhé... …",
              url_ref:"https://www.facebook.com/ducthaifood/posts/2630942420463451"


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
          fullname:"Thủ tướng",
          user_user:"#"
       },
       status:{
            content:"Thủ tướng trao danh hiệu anh hùng...",
            url_ref:"http://baochinhphu.vn/Tin-noi-bat/Thu-tuong-trao-danh-hieu-Anh-hung-cho-Dai-Phat-thanh-Giai-phong/345930.vgp",

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
           fullname:"Phúc Đoàn Vĩnh",
           user_user:"#"
        },
        status:{
             content:"NÓNG: DÂN OAN BIỂU TÌNH! 8g30p 7/9/2018..",
             url_ref:"#",
             type:'fb'

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
          fullname:"Tin tức và Sự kiện",
          user_user:"#"
       },
       status:{
            content:"Xin chúc mừng VOV tròn 73 tuổi…",
            url_ref:"https://facebook.com/2186530301558394",

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
        fullname:"Tin nhanh",
        user_user:"#"
     },
     status:{
          content:"Thủ tướng Lào sẽ tham dự WEF ASIAN 2018 tại Việt Nam…",
          url_ref:"https://www.vietnamplus.vn/thu-tuong-lao-se-tham-du-wef-asean-2018-tai-viet-nam/523333.vnp",

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
         fullname:"Thanh Hiếu Bùi",
         user_user:"#"
      },
      status:{
           content:"Anh em có tiền đầu tư vào TTC của Đặng Văn Thành quốc tịch Trung Quốc nhé …",
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
            fullname:"Thanh Hiếu Bùi",
            user_user:"#"
         },
         status:{
              content:"Anh em có tiền đầu tư vào TTC của Đặng Văn Thành quốc tịch Trung Quốc nhé …",
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
           fullname:"Thủ tướng",
           user_user:"#"
        },
        status:{
             content:"Hình ảnh thủ tướng thăm, dự lễ kỉ niểm 73 năm thành lập VOV …",
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
         fullname:"Hông Thái Hoàng",
         user_user:"#"
      },
      status:{
           content:"Các bạn lưu ý quyền lợi khi thuê phòng trọ …",
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
   login:function(req,res){

    let body=req.body;
   var data = {
     'data':{"username":"cuc_attt_monitor","password":"attT#0928"},
     'action':'/authentication/login'
   };

          processingserver.callAPI(data, async function (err, rs) {




                return res.send(rs);

        });
   },
   refreshToken:function(req,res){

   },
   get:function(req,res){
     let body={
       usermame:'adv',
       password:'aaa'
     }
    var data = {
      "access_token":sails.config.access_token,
      "action":"/user/get-all-info"
    };

    // curl -X GET -H "Authorization:Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjdWNfYXR0dF9tb25pdG9yIiwiZXhwIjoxNTM3NDQ2NzE3LCJpYXQiOjE1MzYyMzcxMTd9.nq6LBpg8y74t7VTqeYy61dsTey_eeV6QHYlvgBV9orB0zR729B9MYMsuZZZ0N8toYzdeZV8-xCiR5H-DieI-UA" "http://203.113.152.30:1200/user/get-all-info"


      processingserver.callAPIWithUrl(data, async function (err, rs) {

        

            return res.send(rs);

    });
}
};


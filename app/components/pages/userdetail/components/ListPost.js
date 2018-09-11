import  React from 'react'

class ListPost extends React.Component{
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

  render(){
    return(
        
    )
  }
}

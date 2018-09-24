import React from 'react'
import User from './User'
import RestfulUtils from 'app/utils/RestfulUtils'
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/vi_VN';

class ContainerList extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          rating_half_star: 3.5,
    
          value5: {
            min: 14,
            max: 40,
          },
          total:100,
          page:1,
          // pageActive:1
          pagesize:10,
          listuser:[
            {
              url_avatar:'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p40x40/39966469_861674570697640_3286366296085626880_n.jpg?_nc_cat=0&oh=a0da8a4c9087cee64056760b1f0aa91f&oe=5C32F9A7',
              name:'Trịnh Đức Bảo Linh',
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
          ]
    
    
        }
      }
      componentDidMount(){
        let {pagesize,page} = this.state;

          this.get_all(page,pagesize)
      }
      get_all(page,pagesize){
        let self =this
        RestfulUtils.post('/users/get_all',{page,pagesize}).then((res)=>{
                   if(res.EC==0){
                        self.setState({listuser:res.DT})
                   }
         })
      }
      onChange(current, pageSize) {


         this.get_all(current,pageSize)
      
        }
    render(){
        return(
            <div className="col-md-10 list-data">

            {this.state.listuser.map((user,index)=>{
              return(
            
                    <User key={index} user={user} />
              )
            })}
                                    <div className="col-md-12 pagination-web remove-padding-col info-detail list-status ">

               <Pagination className="ant-pagination"

                onChange={this.onChange.bind(this)}
                total={this.state.total}
                locale={localeInfo}
                style={{color:"white"}}

                      />
                      </div>

   </div>
        )
    }
}
module.exports = ContainerList
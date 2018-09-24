import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

class User extends React.Component{

    render(){
        let {user} = this.props
        return(
            <div className="col-md-2 remove-padding-col">
            <div className="user">
            <div className="div-avatar">
                <img className="avatar" src={user.avatar} />
            </div>
            <div className="infor">
                  <div className="name">
                     {user.name}
                  </div>
                  <div className="infor-atribute">
                     {user.work}
                  </div>
                  <div className="infor-atribute">
                  {user.studied}
                  </div>
                  <div className="infor-atribute">
                  {user.live}
                  </div>
                  <div className="infor-atribute">
                  {user.from}
                  </div>

            </div>
            <div className="star">
            <div style={{fontSize: 16}}>
          <StarRatingComponent
            name="app6"
            starColor="#ffb400"
            emptyStarColor="#ffb400"
            value={user.star}
            // onStarClick={this.onStarClickHalfStar.bind(this)}
            renderStarIcon={(index, value) => {
              return (
                <span>
                  <i style={{color:index <= value ?"":"#006bd7"}} className='fa fa-star' />
                </span>
              );
            }}
            renderStarIconHalf={() => {
              return (
                <span>
                   <span style={{position: ''}}><i className="fa fa-star unrated" /></span>

                  <span><i style={{float: "left",top: "3px"}} className="fa fa-star-half-o" /></span>
                </span>
              );
            }} />
        </div>
            </div>
        </div>
        </div>
        )
    }
}
module.exports = User
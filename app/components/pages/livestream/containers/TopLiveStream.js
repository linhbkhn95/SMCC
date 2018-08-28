import React, { Component } from 'react'

class TopLiveStream extends Component {

    render() {
        const data = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
        return (
            <div className="list-livestream">
                <div className="title">TOP LIVESTREAM</div>
                <div className="content">
                    {
                        data.map(e => <TopLiveStreamItem avatar={e} />)
                    }
                </div>

            </div>
        )
    }
}
const TopLiveStreamItem = (props) => {
    return (
        <div className="livestream-views">
            <div className="avatar">
                <img src={"./images/" + props.avatar} style={{ width: 30, height: 30 }} />
            </div>
            <div className="info">
                <div className="name">Lee flores</div>
                <div className="view">1,200 lượt xem</div>
            </div>

        </div>
    )
}

module.exports = TopLiveStream
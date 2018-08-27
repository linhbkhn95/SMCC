import React, { Component } from 'react'

const CityItem = (props) => {
    return (
        <div className="rate-city" key="">
            <div className="city">Tp Hồ Chí Minh</div>
            <div className="precent">18.72%</div>
        </div>
    )
}
class TopCity extends Component {

    render() {
        const data = [1, 2, 3, 4, 5]
        return (
            <div className="list-top-city">
                <div className="title">TOP TỈNH THÀNH</div>
                <div className="content">
                    {
                        data.map(e => <CityItem city={e} />)
                    }
                </div>

            </div>
        )
    }
}
module.exports = TopCity
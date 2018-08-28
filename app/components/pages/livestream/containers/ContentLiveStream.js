import React, { Component } from 'react'

class ContentLiveStream extends Component {
    render() {
        return (
            <div className="content-livestream">
                <div className="header-post">
                    <div className="avatar">
                        <img src="./images/1.jpg" />
                    </div>
                    <div className="user-post">
                        <div className="top">
                            <div className="user">
                                <div className="strong-username">Kim Nhung</div> was live -- with <div className="strong-username">Nguyen Kieu Mai</div> and <div className="strong-username">My Tran</div>
                            </div>
                            <div className="more">
                                <i className="fa fa-ellipsis-h" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="time-post">
                            <div className="time">4 giờ</div>
                            <div className="who-see">
                                <i className="fa fa-globe" aria-hidden="true" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="caption">
                    Choi mini game nhan free
                </div>
                <div className="video-livestream">
                    <img src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/40291117_577072052711274_4024858383302524928_n.jpg?_nc_cat=0&oh=374d01c7fbebf13aa8c5dc66aeeda35e&oe=5BF76B4E" />
                </div>
                <div className="panel-reaction">
                    <div className="reaction-3-icon">
                        <i className="icon like" aria-hidden="true" />
                        <i className="icon heart" aria-hidden="true" />
                        <i className="icon smile" aria-hidden="true" />
                        <div className="count">37</div>
                    </div>
                    <div className="info-post">
                        <div className="comments">761 comments</div>
                        <div className="shares">247 shares</div>
                        <div className="views">3.6K Views</div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ContentLiveStream
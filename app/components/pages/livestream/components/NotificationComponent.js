import React, { Component } from 'react'

class NotificationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="notification">
                <div className="avatar">
                    <img src={"./images/" + this.props.avatar} />
                </div>
                <div className="content">
                    <div className="caption">
                        <div className="user-name">LongND</div>
                        <div className="status-livestream">was live</div>
                        <div className="user-content">-- with Abc dlsl</div>
                    </div>
                    <div className="reaction">
                        <div className="info">
                            <div className="like padding-right-12">
                                <i className="fa fa-thumbs-o-up icon-5-999" aria-hidden="true" />
                                12322
                            </div>
                            <div className="comment padding-right-12">
                                <i className="fa fa-comment-o icon-5-999" aria-hidden="true" />
                                123
                            </div>
                            <div className="share padding-right-12">
                                <i className="fa fa-share icon-5-999" aria-hidden="true" />
                                123
                            </div>
                        </div>
                        <div className="time-before">
                            17m
                        </div>
                    </div>
                </div >


            </div >
        )
    }
}
module.exports = NotificationComponent;
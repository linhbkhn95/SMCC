import React, { Component } from 'react'
import TopCity from './containers/TopCity'
import TopLiveStream from './containers/TopLiveStream'
import SideBar from './containers/SideBar'
import ContentLiveStream from './containers/ContentLiveStream'
class LiveStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    onClick = () => {
        this.setState({
            visible: !this.state.visible
        })
        console.log('ab')
    }
    render() {
        return (
            <div id="content">
                <div className="live">
                    <i className="fa fa-circle" aria-hidden=" true"></i>
                    <p>Trực tiếp 20:01:23</p>
                </div>
                <SideBar onClick={this.onClick} visible={this.state.visible} />
                <div className="livestream col-md-4">
                    <ContentLiveStream />
                </div>
                <div className="status-rating col-md-2">
                    <TopLiveStream />
                    <TopCity />
                </div>
            </div >
        );
    }
}

module.exports = LiveStream;
import React, { Component } from 'react'
import SideBarSearch from '../../SideBar'
import TopCity from './containers/TopCity'
import TopLiveStream from './containers/TopLiveStream'
class LiveStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div id="content">
                <div className="status-rating col-md-3">
                    <TopLiveStream />
                    <TopCity />
                </div>
            </div>
        );
    }
}

module.exports = LiveStream;
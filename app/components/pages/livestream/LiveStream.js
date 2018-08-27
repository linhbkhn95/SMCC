import React, { Component } from 'react'
import SideBarSearch from './containers/SideBarSearch'
import TopCity from './containers/TopCity'
import TopLiveStream from './containers/TopLiveStream'
class LiveStream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSidebar: false
        }
    }
    showSidebar = () => {
        this.setState({ showSidebar: !this.state.showSidebar })
    }
    render() {
        const width = this.state.showSidebar ? 'calc(100% - 500px)' : '100%';
        return (
            <div>
                <SideBarSearch visible={this.state.showSidebar} />
                <div id="content" style={{ width }}>
                    <button onClick={this.showSidebar} style={{ zIndex: 100000 }}>Menu</button>
                    <div className="status-rating col-md-3">
                        <TopLiveStream />
                        <TopCity />
                    </div>
                </div>
            </div>

        );
    }
}

module.exports = LiveStream;
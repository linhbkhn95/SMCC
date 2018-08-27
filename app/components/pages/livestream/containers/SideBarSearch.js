import React, { Component } from 'react'
import NotificationComponent from '../components/NotificationComponent'


class SideBarNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false
        }
    }
    toggleList = () => {
        this.setState({
            listOpen: !this.state.listOpen
        })
    }
    render() {

        const marginLeft = this.props.visible ? 0 : -500;
        let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        let { listOpen } = this.state;
        return (
            <nav id='sidebar' style={{ marginLeft }}>
                <div className="bar-header">
                    <i className="fa fa-bars" aria-hidden="true" />
                    <div className="name-header">BẢN ĐỒ LIVESTREAM TRỰC TUYẾN</div>
                </div>
                <div className="search">
                    <input type="text" className="form-control" placeholder="Tìm kiếm" />
                    <span className="glyphicon glyphicon-search"></span>
                </div>
                <div className="line"></div>
                <div className="place">
                    <div className="header" onClick={() => this.toggleList()}>
                        <div className="header-title">Tỉnh/Thành</div>
                        {listOpen
                            ? <i className="fa fa-chevron-up" aria-hidden="true" />
                            : <i className="fa fa-chevron-down" aria-hidden="true" />
                        }
                    </div>
                    {/* {listOpen && <ul className="dd-list">
                            {list.map((item) => (
                                <li className="dd-list-item" key={item.id} >{item.title}</li>
                            ))}
                        </ul>} */}
                    <div className="header" onClick={() => this.toggleList()}>
                        <div className="header-title">Quận/Huyện</div>
                        {listOpen
                            ? <i className="fa fa-chevron-up" aria-hidden="true" />
                            : <i className="fa fa-chevron-down" aria-hidden="true" />
                        }
                    </div>
                </div >
                <div className="list-notification">
                    {
                        data.map(e => <NotificationComponent />)
                    }
                </div>

            </nav >
        )
    }
}
module.exports = SideBarNotification
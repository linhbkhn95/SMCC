import React, { Component } from 'react'
import NotificationComponent from '../components/NotificationComponent'


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            visible: false
        }
    }
    toggleList = () => {
        this.setState({
            listOpen: !this.state.listOpen
        })
    }
    onClick = () => {
        console.log('...state', this.state.visible)
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        const collapse = !this.state.visible ? "" : "widget-collapse";
        console.log('...display', collapse)
        const data = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
        let { listOpen } = this.state;
        return (
            <div className={"widget-pane col-md-3 " + collapse}>
                <div className="widget-content" >
                    <div className="bar-header">
                        <div className="i-bars">
                            <i className="fa fa-bars" aria-hidden="true" />
                        </div>
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
                            {
                                listOpen ? <i className="fa fa-chevron-up" aria-hidden="true" />
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
                            data.map(e => <NotificationComponent avatar={e} />)
                        }
                    </div>
                </div>
                <div className="widget-button-container" onClick={this.onClick}>
                    <span>
                        {
                            this.state.visible ? <i className="fa fa-angle-right" aria-hidden="true" />
                                : <i className="fa fa-angle-left" aria-hidden="true" />
                        }
                    </span>

                </div>
            </div >

        )
    }
}
module.exports = SideBar
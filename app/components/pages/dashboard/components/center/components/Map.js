import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import React from 'react'

const Map = ReactMapboxGl({
  accessToken: "sk.eyJ1IjoibGluaGJraG45NSIsImEiOiJjamxncmJ4bGYwZWU2M3FvMjBnb3QxOWh3In0.rlM2ItR9dZ8fU-tp45QmBQ"
});
function redraw({project}) {
  const [cx, cy] = project([-122, 37]);
  return <circle cx={cx} cy={cy} r={4} fill="blue" />;
}

// in render()
import ReactMapGL, {LinearInterpolator, FlyToInterpolator} from 'react-map-gl';
// 3rd-party easing functions
import d3 from 'd3-ease';

module.exports = class MyApp extends React.Component {
    state = {
        viewport: {
            width: 800,
            heigh: 600,
            longitude: -122.45,
            latitude: 37.78,
            zoom: 14
        }
    };

    _onViewportChange = viewport => {
        this.setState({viewport});
    };

    _goToNYC = () => {
        const viewport = {
            ...this.state.viewport,
            longitude: -74.1,
            latitude: 40.7,
            zoom: 14,
            transitionDuration: 5000,
            transitionInterpolator: new FlyToInterpolator(),
            transitionEasing: d3.easeCubic
        };
        this.setState({viewport});
    };

    render() {
        return (
            <div>
                <ReactMapGL mapboxApiAccessToken="pk.eyJ1IjoibGluaGJraG45NSIsImEiOiJjamxncmdqeHQxYXFsM3FwYjd0Y3d3ejM5In0.SZb4IWKq2dexrerHs9CQiQ" {...this.state.viewport} onViewportChange={this._onViewportChange} >
ggggggggggggggggggg
                </ReactMapGL>
                {/* <button onClick={this._goToNYC}>New York City</button> */}
            </div>
        );
    }
}

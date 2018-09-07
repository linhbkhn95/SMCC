import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SimpleExample extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
   <div></div>
    )
  }
}
// sk.eyJ1IjoibGluaGJraG45NSIsImEiOiJjamxzMXp2NmUwYmZ6M3ByeGhtcjl5M2huIn0.C2DWTZHixPb_09nAV24teg

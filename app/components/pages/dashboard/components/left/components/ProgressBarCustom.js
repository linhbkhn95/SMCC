import React from 'react'
import {ProgressBar,Collapse} from 'react-bootstrap'

class ProgressBarCustom extends React.Component{
  render(){
    let {showLabel,now}  = this.props;
    if(showLabel)
    return(
      <ProgressBar  {...this.props}   now={now} label={`${now}%`} />
    )
    else
     return <ProgressBar  {...this.props} active  now={now}  />
  }
}
module.exports = ProgressBarCustom

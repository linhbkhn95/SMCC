import React from 'react'
import Chart from './Chart'
import Lens from '@material-ui/icons/Lens';
import TrendingDown from '@material-ui/icons/TrendingDown';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles';
import TrendingUp from '@material-ui/icons/TrendingUp';
const styles = theme => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    hieght:'100%',

  },
  styleText:{
    color:'white'
  },
  icon: {
    color:'white',
    fontSize: "21px"


  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  icon_chirld_menu:{
    color: "#0092f1",

    fontSize: "10px",
    marginRight:"23px"
  },
  trending_up:{
    color: "#00ce7d",

    fontSize: "16px",
    marginLeft:"5px"
  },
  trending_down:{
    color: "#002864",

    fontSize: "16px",
    marginLeft:"5px"
  },
  expand:{
    color:"white",
  },
  active: {
    backgroundColor: '#0092f1',
  },

});
class Trend extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      open: true,
    };

  }
  render(){
    let {classes}  = this.props;

     return(
          <div>
              <div className="col-md-3">
                    <Chart />
              </div>
              <div className="col-md-3 data-trend ">
                  <div className="">
                     <div className="pull-left"><Lens className={classes.icon_chirld_menu} /> Tiêu chí</div>
                     <div className="pull-right">
                        12.7
                       <TrendingUp className={classes.trending_up}  />

                    </div>
                  </div>
              </div>
              <div className="col-md-3 data-trend">
                  <div className="">
                     <div className="pull-left"><Lens className={classes.icon_chirld_menu} /> Tiêu chí</div>
                     <div className="pull-right">
                       12.7
                       <TrendingUp className={classes.trending_down}  />

                    </div>
                  </div>
              </div>
              <div className="col-md-3 data-trend">
                  <div className="">
                     <div className="pull-left"><Lens className={classes.icon_chirld_menu} /> Tiêu chí</div>
                     <div className="pull-right">
                       <TrendingUp className={classes.trending_down}  />
                        12.7
                    </div>
                  </div>
              </div>
          </div>

     )
  }
}
Trend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Trend);



import React from 'react'
import TabShade from './components/TabShade'
import TabInfo from './components/TabInforSource'
import TabDomain from './components/TabDomain'
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});
class Statistic extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      typeStatistic:"1"
    }
  }
  onChange(e){
    this.setState({typeStatistic:e.target.value})
  }
  render(){
  const { classes } = this.props;

     return (
      <div className="col-md-12 remove-padding-col info-detail" >
            {/* <Paper className={classes.root} elevation={1}> */}
            <div style={{marginBottom:"20px"}} className="col-md-12 remove-padding-col " >

                      <div  className="col-md-3 left-filter a remove-padding-col">
                            <div className="filter">
                            <select onChange={this.onChange.bind(this)} className="form-control">
                                <option value="1">Theo sắc thái</option>
                                <option value="2">Theo Nguồn tin</option>
                                <option value="3">Theo tên miền</option>

                            </select>
                          </div>
                    </div>
            </div>
                   {this.state.typeStatistic=="1"? <TabShade />:this.state.typeStatistic=="2"? <TabInfo />:  <TabDomain />}

            {/* </Paper> */}
          {/* <TabShade /> */}

        </div>
     )
  }
}

Statistic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Statistic);

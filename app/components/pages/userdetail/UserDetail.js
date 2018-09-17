import React from 'react';
import DropdownUtils from 'app/utils/input/DropdownUtils'
import InforChannel from './components/InforChannel'
import ListPost from './components/ListPost'
import InfoPerSon from './components/InfoPerSon'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Dashboard from '@material-ui/icons/Dashboard';
import TrendingUp from '@material-ui/icons/TrendingUp';

import Statistic from './Statistic'
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color:'white',
    fontSize: "21px"


  },
  tabsRoot: {
    borderBottom: '1px solid #1456ba',
  },
  tabsIndicator: {
    backgroundColor: '#1890ff',
  },
  tabRoot: {
    color:'white',
    // fontSize:'20px',
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Maven Pro',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#fffff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#fffff',
    },
  },
  tabSelected: {},
});
class UserSpecial extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      items: 10,
      page:1,
      loadingState: false,
      fulldata:false,
      rating_half_star: 3.5,

      value5: {
        min: 14,
        max: 40,
      },
      listStatus:[],

      user:{}

    }
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };


  onChangeDropdown(type,data){



     this.state.user[type] = data.value;

     this.setState(this.state)
 }
  render(){
    const { classes } = this.props;
    const { value } = this.state;

     return(

        <div className="row list-user" >
            <div className="col-md-12">
                   <div style={{marginBottom:"9px"}} className="col-md-2 remove-padding-col">
                        <DropdownUtils className="form-control title-content"  typeValue="id" typeLabel="display_name" value={this.state.user.topic} callApi={true} onChange={this.onChangeDropdown.bind(this)} type="topic"  CDID="" urlApi="/user/get_all_info" optionFilter={{}} />
                  </div>
                  <div className="hr-title"></div>
                  <div className="col-md-12 remove-padding-col">

                  <Tabs    classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }} centered={true} fullWidth={true} value={value} onChange={this.handleChange} scrollable scrollButtons="off">
                      <Tab             classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="THÔNG TIN CHUNG" icon={<Dashboard className={classes.icon}  />} />
                      <Tab    classes={{ root: classes.tabRoot, selected: classes.tabSelected }} label="THỐNG KÊ" icon={<TrendingUp className={classes.icon}  />} />
                   />
                </Tabs>
                {value === 0 && <TabContainer>
                  {/* <div className="hr-title"></div> */}
                  <InfoPerSon topic={this.state.user.topic} />
                   <div className="hr-title"></div>

                   <ListPost topic={this.state.user.topic} />
                    </TabContainer>}
             {value === 1 && <TabContainer><Statistic /></TabContainer>}
                      </div>
                      </div>
            </div>



     )
  }
}
UserSpecial.propTypes = {
  classes: PropTypes.object.isRequired,
};

module.exports =  withStyles(styles)(UserSpecial);

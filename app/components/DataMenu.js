
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
// import VideoIcon from '@material-ui/icons/VideoCam';
import PeopleIcon from '@material-ui/icons/People';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import ReportIcon from '@material-ui/icons/Report';
import HomeIcon from '@material-ui/icons/Home';
 import TrendIcon from '@material-ui/icons/TrendingUp';
//  import white from '@material-ui/core/colors/white';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Lens from '@material-ui/icons/Lens';
import {NavLink} from 'react-router-dom'
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

    fontSize: "6px",
    marginRight:"23px"
  },
  expand:{
    color:"white",
  },
  active: {
    backgroundColor: '#0092f1',
  },

});

  class InsetList extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        open: true,
      };

    }
    handleClick = () => {
      console.log('setstassssssadase',this.props.openDrawer)

      if(this.props.openDrawer){
        this.setState(state => ({ open: !state.open }));
        console.log('setstate')
      }
      else{
        this.props.showDrawer()
      }
    };

  componentDidMount(){
    if(!this.props.openMenu){
      this.setState(state => ({ open: false }));

    }
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.openMenu){
      this.setState(state => ({ open: false }));

    }
  }
render(){
  let {classes}  = this.props;

    return(
  <div className={classes.root}>
            <List>

    <ListItem     onClick={this.props.closeDrawer}
 component={NavLink} exact to={"/"} activeClassName={classes.active} button>
      <ListItemIcon>
        <HomeIcon className={classes.icon} />
      </ListItemIcon>
      {/* <ListItemText disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>TRANG CHỦ</Typography>}/> */}
              <ListItemText disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"11px",fontWeight:"bold",fontFamily:"Maven Pro, sans-serif" }}>TRANG CHỦ</Typography>}   />

    </ListItem>
    <ListItem  onClick={this.props.closeDrawer} component={NavLink} exact to={"/user-special"} activeClassName={classes.active} button>
      <ListItemIcon>
        <StarIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"11px",fontWeight:"bold",fontFamily:"Maven Pro, sans-serif" }}>NGƯỜI ĐẶC BIỆT</Typography>}   />
    </ListItem>
    {/* <ListItem onClick={this.props.closeDrawer} component={NavLink} exact to={"/trend"} activeClassName={classes.active}  button>
      <ListItemIcon>
        <VideoIcon className={classes.icon}  />
        </ListItemIcon>
      <ListItemText disableTypography
      primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"11px",fontWeight:"bold",fontFamily:"Maven Pro, sans-serif" }}>LIVESTREAM</Typography>}   />

       </ListItem> */}
    <ListItem onClick={this.props.closeDrawer} component={NavLink} exact to={"/trend"} activeClassName={classes.active} button>
      <ListItemIcon>
      <TrendIcon className={classes.icon}  />

      </ListItemIcon>
      <ListItemText disableTypography
      primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"11px",fontWeight:"bold",fontFamily:"Maven Pro, sans-serif" }}>XU HƯỚNG</Typography>}   />    </ListItem>


<ListItem button onClick={this.handleClick}>
<ListItemIcon>
<PeopleIcon className={classes.icon}  />
</ListItemIcon>
<ListItemText disableTypography
primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"11px",fontWeight:"bold",fontFamily:"Maven Pro, sans-serif" }}>NGƯỜI DÙNG</Typography>}   />
            {this.state.open ? <ExpandLess className={classes.expand} /> : <ExpandMore  className={classes.expand}  />}
          </ListItem>
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
              <ListItemIcon >
            <Lens className={classes.icon_chirld_menu} />
          </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"10px",fontFamily:"Maven Pro, sans-serif" }}>Xu hướng chung</Typography>}   />                </ListItem>
              <ListItem button className={classes.nested}>
              <ListItemIcon >
            <Lens className={classes.icon_chirld_menu} />
          </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"10px",fontFamily:"Maven Pro, sans-serif" }}>Phân tích theo khu vực</Typography>}   />            </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon >
            <Lens className={classes.icon_chirld_menu} />
          </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"10px",fontFamily:"Maven Pro, sans-serif" }}>Phân tích theo mật độ</Typography>}   />              </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon >
            <Lens className={classes.icon_chirld_menu} />
          </ListItemIcon>
          <ListItemText disableTypography
          primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"10px",fontFamily:"Maven Pro, sans-serif" }}>Phân tích theo thời gian</Typography>}   />              </ListItem>

            </List>
          </Collapse>
    <ListItem onClick={this.props.closeDrawer} component={NavLink} exact to={"/list-user"} activeClassName={classes.active}  button>
      <ListItemIcon>
        <FolderSharedIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText disableTypography
      primary={<Typography type="body2" style={{ color: '#FFFFFF',fontSize:"11px",fontWeight:"bold",fontFamily:"Maven Pro, sans-serif" }}>QUẢN TRỊ</Typography>}   />    </ListItem>



   </List>
  </div>
);

}
}

// export const otherMailFolderListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <PeopleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Người dùng" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <FolderSharedIcon />
//       </ListItemIcon>
//       <ListItemText primary="Quản trị" />
//     </ListItem>
//     {/* <ListItem button>
//       <ListItemIcon>
//         <ReportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Spam" />
//     </ListItem> */}
//   </div>
// );
InsetList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InsetList);

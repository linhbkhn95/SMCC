
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import VideoIcon from '@material-ui/icons/VideoCam';
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
    color:'white'

  },

});
function InsetList(props) {
  const { classes } = props;

    return(
  <div className={classes.root}>
            <List>

    <ListItem button>
      <ListItemIcon>
        <HomeIcon className={classes.icon} />
      </ListItemIcon>
      {/* <ListItemText disableTypography
        primary={<Typography type="body2" style={{ color: '#FFFFFF' }}>TRANG CHỦ</Typography>}/> */}
              <ListItemText    primary="TRANG CHỦ" />

    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText    primary="NGƯỜI ĐẶC BIỆT" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TrendIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText primary="XU HƯỚNG" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VideoIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText primary="LIVESTREAM" />
    </ListItem>


    <ListItem button>
      <ListItemIcon>
        <PeopleIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText primary="NGƯỜI DÙNG" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FolderSharedIcon className={classes.icon}  />
      </ListItemIcon>
      <ListItemText primary="QUẢN TRỊ" />
    </ListItem>
   </List>
  </div>
);

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

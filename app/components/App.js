var React = require('react');
// var $ = require('jquery');

// // load jvectormap jquery plugin
// require('jvectormap-next')($);
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link } from 'react-router-dom';

var { Provider } = require('react-redux');
import DashBoard from './pages/dashboard/DashBoard'
import DashBoardChart from './pages/dashboard/DashBoardChart'

var store = require('app/store.js');
// var Test =require('app/components/Test.js');
import Layout from 'app/components/Menu.js';
import  LayoutMaterial from './LayoutMaterial';

var Login = require('app/components/pages/login/Login.js');
// var ShopCart = require('app/components/pages/shopcart/ShopCart.js');
var LiveStream = require('app/components/pages/livestream/LiveStream.js');
var ListUser = require('app/components/pages/listuser/ListUser.js');
var UserDetail = require('app/components/pages/userdetail/UserDetail.js');
import WordHashTag from 'app/components/pages/listuser/WordHashTag.js'
import AnalistUser from 'app/components/pages/analist_user/AnalistUser'

// import OrderStep from  'app/components/pages/shopcart/OrderStep.js';
// import DetailProduct from 'app/utils/DetailProduct.js';
import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from 'app/utils/setAuthorizationToken.js';
import { setCurrentUser } from 'app/action/authActions.js';
import Map from './pages/dashboard/components/center/components/Map'

import { logout } from 'app/action/actionAuthenticate.js';
if (localStorage.jwToken) {
  console.log('cssssssssssssssssssssssssssmm');
  setAuthorizationToken(localStorage.jwToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwToken)));

}
// import { cyan500 } from 'material-ui/styles/colors';

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: cyan500,
//   },
//   appBar: {
//     height: 50,
//   },
// });
// function setFocusMapCenter() {
//   var mapObj = $('#map').vectorMap('get', 'mapObject'),
//       center = mapObj.pointToLatLng(mapObj.width / 2, mapObj.height / 2);

//   var config = {
//       animate: true,
//       lat: center.lat,
//       lng: center.lng,
//       scale: 1
//   }

//   mapObj.setFocus(config)
// }


class App extends React.Component {

  // require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
  //require('style!css!sass!./css/style.scss');
  // $(document).ready(() => $(document).foundation());
  componentDidMount() {

  }


  render() {
    return (
      // <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
          <Router>
            <Layout>
              {/* <Link to="/user/login">Đăng nhập</Link>  */}
              <Switch>
                <Route exact path="/" component={DashBoardChart} />
                <Route path="/trend" component={DashBoard} />
                <Route path="/analist-user" component={AnalistUser} />

                <Route path='/livestream' component={LiveStream} />
                <Route path='/list-user' component={ListUser} />
                <Route path='/user-special' component={UserDetail} />
                {/* <Route path='/map' component={Map} /> */}
                <Route path='/hash-wordtag' component={WordHashTag} />

                {/* <Route  exact   path="/wall" component={Home}/> */}
                <Route render={function () {
                  return <p> not found</p>
                }
                } />
              </Switch>
            </Layout>
          </Router>
        </Provider>

    )
  }
}

module.exports = App;


import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './pages/Navbar';
import PrivateRouteUser from './components/PrivateRouteUser'
import Card from './pages/Card';
import Product from './pages/Product';
import Detailsproduct from './pages/Detailsproduct';
import Products from './pages/Products';
import ProfileAdmin from './components/admin/ProfileAdmin';
import PrivateRoute from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';

import Addproduct from './components/admin/Addproduct'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/card' component={Card}></Route>
      <Route exact path='/product' component={Product}></Route>
      <Route exact path='/products' component={Products}></Route>

      <Route exact path='/Detailsproduct' component={Detailsproduct}></Route>

      <PrivateRoute exact path='/profileAdmin' component={ProfileAdmin}></PrivateRoute>
      <PrivateRouteUser exact path='/profile' component={Profile}></PrivateRouteUser>

      </Switch>
    </>
  );
}

export default App;

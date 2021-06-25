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
import ImagesBTN from './pages/ImagesBTN';
import ThemeMariage from './pages/ThemeMariage';
import ThemeAnniv from './pages/ThemeAnniv';
import ThemeBaby from './pages/ThemeBaby';
import ThemeModel from './pages/ThemeModel';
import Slide from './pages/Slide';

import SideTopBar from './pages/SideTopBar';

import Navbar1 from './components/Navbar1';




function App() {
  return (
    <>

{/* <ImagesBTN></ImagesBTN> */}

{/* <SideTopBar></SideTopBar>
    <Navbar></Navbar> */}
    <Switch>
      <Navbar1></Navbar1>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/card' component={Card}></Route>
      <Route exact path='/product' component={Product}></Route>
      <Route exact path='/products' component={Products}></Route>

      <Route exact path='/Detailsproduct' component={Detailsproduct}></Route>

      <PrivateRoute exact path='/profileAdmin' component={ProfileAdmin}></PrivateRoute>◘
      <PrivateRouteUser exact path='/profile' component={Profile}></PrivateRouteUser>

      </Switch>

      
      
      {/* <SideTopBar></SideTopBar>

          <ImagesBTN></ImagesBTN> 
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ThemeMariage></ThemeMariage> 

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <ThemeAnniv></ThemeAnniv> 

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <ThemeBaby></ThemeBaby> 

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <ThemeModel></ThemeModel> 

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Slide></Slide> 

          <br></br>
          <br></br>
          <br></br>
          <br></br> */}




    </>
  );
}

export default App;

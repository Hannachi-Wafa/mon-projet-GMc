    import './App.css';
    import {Route,Switch, useLocation} from 'react-router-dom'
    import Login from './pages/Login';
    import Home from './pages/Home';
    import Profile from './pages/Profile';

    import Navbar from './pages/Navbar';
    import PrivateRouteUser from './components/PrivateRouteUser'
    import Card from './pages/Card';
    import Products from './pages/Products';
    import Products1 from './components/admin/Products';

    import Theme from './pages/Theme'; 
    import ProfileAdmin from './components/admin/ProfileAdmin';
    import PrivateRoute from './components/PrivateRoute'

    import 'bootstrap/dist/css/bootstrap.min.css';

    import ThemeMariage from './pages/ThemeMariage';
    import ThemeAnniv from './pages/ThemeAnniv';
    import ThemeBaby from './pages/ThemeBaby';


    import Navbar1 from './components/Navbar1';



    import DetailsProduct from './pages/Detailsproduct';
    import DetailsTheme from './pages/DetailsTheme'

import ProfileA from './pages/ProfileA';

import Checkout from './pages/Checkout';
import ReservationUser from './pages/ReservationUser';
import Footer from './pages/Footer';

import CardReserve from './pages/CardReserve';



import Order from './components/admin/Order';
import Orderres from './components/admin/Orderres';
import Checkoutres from './pages/checkoutres';

import { useState } from 'react';

    function App() {

    
      
    return (
        <>

    {/* <ImagesBTN></ImagesBTN> */}

    {/* <SideTopBar></SideTopBar>
        <Navbar></Navbar> */}




            <Navbar1></Navbar1>


        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/card/:prodId?' component={Card}></Route>
        <Route exact path='/reservcard/:themeId?' component={CardReserve}></Route>
        <Route exact path='/resrervationUser' component={ReservationUser}></Route>
        <Route exact path='/products' component={Products}></Route>
        <Route exact path='/productsAdmin' component={Products1}></Route>

         <Route exact path='/Order' component={Order}></Route> 
         <Route exact path='/Orderres' component={Orderres}></Route> 

        <Route exact path='/pages/ImagesBTN' component={Theme}></Route>
        

        <Route exact path='/pages/ThemeMariage' component={ThemeMariage}></Route>
        <Route exact path='/pages/ThemeAnniv' component={ThemeAnniv}></Route>
        <Route exact path='/pages/ThemeBaby' component={ThemeBaby}></Route>
        <Route exact path='/Checkout' component={Checkout}></Route>
        <Route exact path='/Checkoutres' component={Checkoutres}></Route>



        <Route exact path="/products/:prodId" component={DetailsProduct}/>
        <Route exact path="/theme/:themeId" component={DetailsTheme}/>

        <PrivateRoute exact path='/profileA' component={ProfileA}></PrivateRoute>

        <PrivateRoute exact path='/profileAdmin' component={ProfileAdmin}></PrivateRoute>
        <PrivateRouteUser exact path='/profile' component={Profile}></PrivateRouteUser>
        </Switch>


    
            
            <Footer></Footer>

            {/* <ThemeModel></ThemeModel> */}

            {/* <VenteMariage></VenteMariage> */}
            {/* <ImagesBTN></ImagesBTN>  */}
            
        {/* <ThemeModel></ThemeModel> */}
        
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

{/* <ThemeCard></ThemeCard> */}



        </>
    );
    }

    export default App;

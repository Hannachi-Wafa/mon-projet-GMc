    import './App.css';
    import {Route,Switch} from 'react-router-dom'
    import Login from './pages/Login';
    import Home from './pages/Home';
    import Profile from './pages/Profile';

    import Navbar from './pages/Navbar';
    import PrivateRouteUser from './components/PrivateRouteUser'
    import Card from './pages/Card';
    import Products from './pages/Products';
    import Theme from './pages/Theme'; 
    import ProfileAdmin from './components/admin/ProfileAdmin';
    import PrivateRoute from './components/PrivateRoute'

    import 'bootstrap/dist/css/bootstrap.min.css';

    import ImagesBTN from './pages/ImagesBTN';
    import ThemeMariage from './pages/ThemeMariage';
    import ThemeAnniv from './pages/ThemeAnniv';
    import ThemeBaby from './pages/ThemeBaby';
    import ThemeModel from './pages/ThemeModel';
    import Slide from './pages/Slide';

    import SideTopBar from './pages/SideTopBar';

    import Navbar1 from './components/Navbar1';



    import DetailsProduct from './pages/Detailsproduct';

import ProfileA from './pages/ProfileA';
import Checkout from './pages/Checkout';

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
        <Route exact path='/products' component={Products}></Route>
        {/* <Route exact path='/theme' component={Theme}></Route> */}

        <Route exact path='/pages/ImagesBTN' component={Theme}></Route>

        <Route exact path='/pages/ThemeMariage' component={ThemeMariage}></Route>
        <Route exact path='/pages/ThemeAnniv' component={ThemeAnniv}></Route>
        <Route exact path='/pages/ThemeBaby' component={ThemeBaby}></Route>
        <Route exact path='/Checkout' component={Checkout}></Route>

       {/* <Route path="/shipping" component={ShippingAddressScreen}></Route>*/}

        <Route exact path="/products/:prodId" component={DetailsProduct}/>

        <PrivateRoute exact path='/profileA' component={ProfileA}></PrivateRoute>

        <PrivateRoute exact path='/profileAdmin' component={ProfileAdmin}></PrivateRoute>
        <PrivateRouteUser exact path='/profile' component={Profile}></PrivateRouteUser>
        </Switch>


        <br></br>
            <br></br>
            <br></br>



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

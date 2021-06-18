import './App.css';
import {Route,Switch} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './pages/Navbar';
import PrivateRoute from './components/PrivateRoute'
import Card from './pages/Card';

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/card' component={Card}></Route>

      <PrivateRoute exact path='/profile' component={Profile}></PrivateRoute>
      </Switch>
    </>
  );
}

export default App;

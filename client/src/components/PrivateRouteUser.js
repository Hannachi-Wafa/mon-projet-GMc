import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRouteUser = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const role = useSelector((state) => state.authReducer.user.role);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && role===0 ? <Component/>
         : <Redirect to='login' />
      }
    />
  );
};

export default PrivateRouteUser;

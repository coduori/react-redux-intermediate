import React from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import authActions from "./store/auth-slice";
import UserProfile from "./components/UserProfile";
function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const login = () => {
    dispatch(authActions.login());
  };
  const logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <React.Fragment>
      {isAuthenticated && <Header authAction={logout} />}
      {isAuthenticated && <UserProfile />}
      {!isAuthenticated && <Auth authAction={login} />}
      <Counter />
    </React.Fragment>
  );
}

export default App;

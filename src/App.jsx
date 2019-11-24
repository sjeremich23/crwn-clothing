import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function useAuthUser() {
  const [user] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async status => {
      // setUser(status);
      createUserProfileDocument(status);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return user;
}

const App = () => {
  const user = useAuthUser();
  // eslint-disable-next-line no-console
  console.log(user);

  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;

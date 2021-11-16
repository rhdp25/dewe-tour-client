import "./App.css";

import { useContext, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "../context/userContext";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "./home/Home";
import Tour from "./tour/Tour";
import Payment from "./payment/Payment";
import Profile from "./profile/Profile";
import IncomeTrip from "./admin/IncomeTrip";
import ListTransaction from "./admin/ListTransaction";
import AddTrip from "./admin/AddTrip";
import AddCountry from "./admin/AddCountry";

import { API } from "../config/api";

function PrivateRoute({ children, ...rest }) {
  const [state] = useContext(UserContext);
  let history = useHistory();

  return (
    <Route
      {...rest}
      render={() => {
        if (state.user.role === "admin") {
          return children;
        } else if (state.user.role === "user") {
          return history.push("/");
        } else if (!state.isLogin) {
          return history.push("/");
        }
      }}
    />
  );
}

function App() {
  let api = API();
  const [state, dispatch] = useContext(UserContext);

  const checkUser = async () => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: "Basic " + localStorage.token,
        },
      };
      const response = await api.get("/check-auth", config);

      // If the token incorrect
      if (response.status === "failed") {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // // Get user data
      let payload = response.data.user;
      // // Get token from local storage
      payload.token = localStorage.token;

      // // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      dispatch({
        type: "AUTH_ERROR",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="App">
      {state.isLoading ? (
        "loading..."
      ) : (
        <div className="homepage-bgimage">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tour/:id" component={Tour} />
            <Route exact path="/payment/" component={Payment} />
            <Route exact path="/profile/" component={Profile} />
            <PrivateRoute>
              <Route exact path="/trip/" component={IncomeTrip} />
              <Route exact path="/transaction/" component={ListTransaction} />
              <Route exact path="/add-trip/" component={AddTrip} />
              <Route exact path="/add-country/" component={AddCountry} />
            </PrivateRoute>
          </Switch>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DetailedTour from "./pages/DetailedTour";
import Payment from "./pages/Payment";
import PaymentWaiting from "./pages/PaymentWaiting";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import ListTransaction from "./pages/ListTransaction";
import AddTrip from "./pages/AddTrip";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="homepage-bgimage">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tour/:id" component={DetailedTour} />
            <Route exact path="/payment/" component={Payment} />
            <Route exact path="/payment-wait/" component={PaymentWaiting} />
            <Route exact path="/profile/" component={Profile} />
            <Route exact path="/trip/" component={IncomeTrip} />
            <Route exact path="/transaction/" component={ListTransaction} />
            <Route exact path="/add-trip/" component={AddTrip} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

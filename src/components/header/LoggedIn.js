import "./header.css";
import { Dropdown, Image } from "react-bootstrap";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Link, useHistory } from "react-router-dom";

import userAvatar from "../../assets/icons/userAvatar.png";
import menuUser from "../../assets/icons/user.png";
import menuPay from "../../assets/icons/bill.png";
import menuTrip from "../../assets/icons/journey.png";
import menuLogOut from "../../assets/icons/logout.png";

function LoggedIn() {
  const [state, dispatch] = useContext(UserContext);

  let history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGOUT",
    });

    history.push("/");
  };

  console.log(state.user.role);
  if (state.user.role === "admin") {
    return (
      <>
        <Dropdown align="end">
          <Dropdown.Toggle className="dropdown-loggedin mt-1">
            <Image src={userAvatar} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/profile">
                <button className="btn-hide">
                  <Image className="icon-menu" src={menuUser} />
                  <b className="b-menu">Profile</b>
                </button>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/trip">
                <button className="btn-hide">
                  <Image className="icon-menu" src={menuTrip} />
                  <b className="b-menu">Trip</b>
                </button>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/transaction">
                <button className="btn-hide">
                  <Image className="icon-menu" src={menuPay} />
                  <b className="b-menu">Transaction</b>
                </button>
              </Link>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item>
              <button className="btn-hide" onClick={handleLogout}>
                <Image className="icon-menu" src={menuLogOut} />
                <b className="b-menu">Logout</b>
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  } else {
    return (
      <>
        <Dropdown align="end">
          <Dropdown.Toggle className="dropdown-loggedin mt-1">
            <Image src={userAvatar} />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to="/profile">
                <button className="btn-hide">
                  <Image className="icon-menu" src={menuUser} />
                  <b className="b-menu">Profile</b>
                </button>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to="/payment-wait">
                <button className="btn-hide">
                  <Image className="icon-menu" src={menuPay} />
                  <b className="b-menu">Pay</b>
                </button>
              </Link>
            </Dropdown.Item>
            <hr />
            <Dropdown.Item>
              <button className="btn-hide" onClick={handleLogout}>
                <Image className="icon-menu" src={menuLogOut} />
                <b className="b-menu">Logout</b>
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    );
  }
}

export default LoggedIn;

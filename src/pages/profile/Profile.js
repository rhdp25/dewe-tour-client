import { Container, Row } from "react-bootstrap";
import UserProfile from "../../components/cards/UserProfile";
import HistoryTrip from "../../components/lists/HistoryTrip";

import { useContext } from "react";
import { UserContext } from "../../context/userContext";

import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { API } from "../../config/api";

const Profile = () => {
  const [state] = useContext(UserContext);
  let history = useHistory();
  let api = API();

  const { data: checkAuth } = useQuery("profilCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };

    const response = await api.get("/check-auth", config);
    return response.data;
  });

  return (
    <>
      {state.isLogin ? (
        <Container fluid style={{ background: "#F1F1F1" }}>
          <Row>
            {checkAuth && <UserProfile item={checkAuth} />}
            <HistoryTrip />
          </Row>
        </Container>
      ) : (
        history.push("/")
      )}
    </>
  );
};

export default Profile;

import { Container, Row } from "react-bootstrap";
import UserProfile from "../../components/cards/UserProfile";
import HistoryTrip from "../../components/lists/HistoryTrip";

const Profile = () => {
  return (
    <>
      <Container fluid style={{ background: "#F1F1F1" }}>
        <Row>
          <UserProfile />
          <HistoryTrip />
        </Row>
      </Container>
    </>
  );
};

export default Profile;

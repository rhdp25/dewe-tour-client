import "./cardMotto.css";
import { Container, Card, Image } from "react-bootstrap";

import guarantee from "../../assets/icons/guarantee.png";
import heart from "../../assets/icons/heart.png";
import agent from "../../assets/icons/agent.png";
import support from "../../assets/icons/support.png";

function CardMotto() {
  return (
    <>
      <div className="mt-00">
        <Container className="d-flex justify-content-between">
          <Card className="card-motto">
            <Card.Body>
              <Image className="icon-motto mb-3" src={guarantee} />
              <h4 className="mb-3">Best Price Guarantee</h4>
              <p>A small river named Duren flows by their place and supplies</p>
            </Card.Body>
          </Card>
          <Card className="card-motto">
            <Card.Body>
              <Image className="icon-hero mb-3" src={heart} />
              <h4 className="mb-3">Travellers Love Us</h4>
              <p>A small river named Duren flows by their place and supplies</p>
            </Card.Body>
          </Card>
          <Card className="card-motto">
            <Card.Body>
              <Image className="icon-hero mb-3" src={agent} />
              <h4 className="mb-3">Best Travel Agent</h4>
              <p>A small river named Duren flows by their place and supplies</p>
            </Card.Body>
          </Card>
          <Card className="card-motto">
            <Card.Body>
              <Image className="icon-hero mb-3" src={support} />
              <h4 className="mb-3">Our Dedicated Support</h4>
              <p>A small river named Duren flows by their place and supplies</p>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <h2 className="text-center mt-10">
        <b>Group Tour</b>
      </h2>
    </>
  );
}

export default CardMotto;

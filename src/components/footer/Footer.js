import "./footer.css";
import leaf from "../../assets/images/leaf.png";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <Image src={leaf} className="leaf" />
      </div>
      <footer>
        <h6 className="text-footer">Copyright @ 2021 Dewe Tour - Rahhady Putro. All Rights reserved</h6>
      </footer>
      ;
    </>
  );
};

export default Footer;

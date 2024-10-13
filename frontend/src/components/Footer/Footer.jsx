import React from "react";
import { ListGroup } from "reactstrap";
import logoTrojanGreen from "../../assets/images/logoTrojanGreen.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logoTrojanGreen} height="130" width="800" alt="logo" />
        <h5>Trojan Green</h5>
        <p className="">Trojan Green: Taste the Future, Sustain the Planet!</p>
      </div>
      <div>
        <h5 className="footer__title mb-3">Delivery Time</h5>
        
          <div className="delivery__time-item border-0 ps-0">
            <span>Friday - Tuesday</span>
            <p>10:00am - 11:00pm</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Wednesday - Thursday</span>
            <p>Off day</p>
          </div>
          <div className="delivery__time-item border-0 ps-0">
            <span>Location</span>
            <p>250 University Corner, Troy, AL, 36081</p>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;

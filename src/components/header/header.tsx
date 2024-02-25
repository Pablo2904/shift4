import { ReactComponent as NaturAlly } from "../../assets/images/Naturally.svg";
import { ReactComponent as SpaLogo } from "../../assets/images/spa.svg";

import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <SpaLogo />
        <NaturAlly />
      </div>
    </header>
  );
};

export default Header;

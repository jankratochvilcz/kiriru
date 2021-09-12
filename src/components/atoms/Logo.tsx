import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Logo.scss";

const Logo = () => (
    <Link to="/">
        <img className="logo" src={logo} alt="Kiriru logo" />
    </Link>
);

export default Logo;

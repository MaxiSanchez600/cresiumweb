import { Link } from "react-router-dom";
import logo_img from "../assets/images/logo.png";
export default function Logo() {
  return (
    <Link to="/">
      <img src={logo_img} alt="" className="w-28" />
    </Link>
  );
}

import { Link } from "react-router-dom"
import logo_img from "../assets/images/logo.png"
export default function Logo() {
  return (
    <Link to='/'>
    <img src={logo_img} alt="" className="hover:scale-105 transition duration-200 cursor-default ease-out hover:ease-indrop-shadow-sm hover:drop-shadow-xl"/>
    </Link>
  )
}

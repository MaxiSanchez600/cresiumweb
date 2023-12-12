/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Navbar({ direction, center = false }) {
  const { t } = useTranslation();

  return (
    <nav>
      <ul
        className={`flex   text-[#000000] font-[500] justify-evenly ${
          center ? "items-center" : ""
        }`}
        style={{
          flexDirection: direction,
          alignItems: center ? "items-center" : "",
        }}
      >
        <li>
          <NavItem title={t("nav.start")} link="/" />
        </li>
        <li>
          <NavItem title={t("nav.solution")} link="/solución" />
        </li>
        <li>
          <NavItem title={t("nav.us")} link="/nosotros" />
        </li>
      </ul>
    </nav>
  );
}

function NavItem({ title, link }) {
  const location = useLocation();
  return (
    <Link
      to={link}
      className={`hover:border-b-2  text-left ${
        location.pathname === link ? "border-b-2" : ""
      } font-NeueHaasDisplayLight font-[500] border-b-0 hover:shadow-sm border-[#EE7C1F] transition  duration-200 ease-out hover:ease-in `}
    >
      {title}
    </Link>
  );
}

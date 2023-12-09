/* eslint-disable no-unused-vars */
import { Navbar, Logo, Button, MobileDrawer } from "./index";
import LanguageSelector from "./languageselector";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation();
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden  sm:grid items-center py-5 grid-cols-3 2xl:w-[60%] w-[90%] mx-auto">
        <div>
          <Logo />
        </div>
        <div>{/* <Navbar direction="row" center={true} /> */}</div>
        <div className="flex gap-2 justify-between">
          {/* <LanguageSelector /> */}
          {/* <Button float={"right"} title={t("misc.start-now")} /> */}
        </div>
      </header>
      {/* Mobile Header */}
      {/* <header className="sm:hidden grid items-center py-5 grid-cols-2 w-[90%] mx-auto">
        <div>
          <Logo />
        </div>
        <div>
          <MobileDrawer />
        </div>
      </header> */}
    </>
  );
}

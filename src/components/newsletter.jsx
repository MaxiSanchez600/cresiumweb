import { useTranslation } from "react-i18next";
import Button from "./button";

export default function Newsletter() {
  const { t } = useTranslation();

  return (
    <>
      <h4 className="text-[#77808B] text-sm">{t("sitemap.already")}</h4>
      <input
        type="email"
        className="border w-full my-4 border-[#EF7C21] p-4 "
        placeholder="Email"
      />
      <Button title={t("misc.start-now")} />
    </>
  );
}

import { useTranslation } from "react-i18next";
export default function Input() {
  const { t } = useTranslation();
  return (
    <input
      type="email"
      className="  placeholder:text-[#000000] focus:border-[#EDEDED] focus:outline-none text-sm placeholder:text-center rounded-[13.27px]  block bg-[#EDEDED] text-[#000000] w-full sm:p-2.5 p-3"
      placeholder={t("newsletter.input")}
      required
    />
  );
}

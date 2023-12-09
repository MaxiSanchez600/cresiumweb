import ctaimg from "../assets/images/cta.png";
import Button from "./button";
import { useTranslation } from "react-i18next";
export default function CTA() {
  const { t } = useTranslation();

  return (
    <div className="w-[80%] py-20 mx-auto">
      <div className="grid gap-6 grid-cols-2">
        <div>
          <img src={ctaimg} />
        </div>
        <div className="bg-[#F6CEB8] rounded-[30px] p-10">
          <h4 className="sm:text-[48px] text-2xl leading-none	 py-10 font-NeueHaasDisplayThin text-left">
            Ocúpate de tu negocio, nosotros nos ocupamos de tus finanzas.
          </h4>
          <Button title={t('newsletter.button')} />
        </div>
      </div>
    </div>
  );
}

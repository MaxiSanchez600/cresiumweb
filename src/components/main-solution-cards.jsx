/* eslint-disable react/prop-types */
import fund from "../assets/images/fund.png";
import doller from "../assets/images/doller.png";
import cash from "../assets/images/cash.png";
import { useTranslation } from "react-i18next";
import SolutionCard from "./solution-card";
import { useState } from "react";

export default function MainSolutionCard() {
  const { t } = useTranslation();

  const [active, setActive] = useState("solution2");

  const onHover = (event) => {
    if (!event.target.id) {
      return;
    }

    setActive(event.target.id);
  };

  return (
    <div className="grid lg:gap-12 md:gap-2 gap-8 grid-cols-3 lg:py-20 py-10">
      <SolutionCard
        id="solution1"
        imgpositon="top"
        title={t("soltions.solution_1.title")}
        src={doller}
        bgacive={active === "solution1"}
        description={t("soltions.solution_1.description")}
        width="70%"
        onHover={onHover}
      />
      <SolutionCard
        id="solution2"
        imgpositon="top"
        title={t("soltions.solution_2.title")}
        src={fund}
        bgacive={active === "solution2"}
        description={t("soltions.solution_2.description")}
        width="70%"
        onHover={onHover}
      />
      <SolutionCard
        id="solution3"
        imgpositon="top"
        title={t("soltions.solution_3.title")}
        src={cash}
        bgacive={active === "solution3"}
        description={t("soltions.solution_3.description")}
        width="70%"
        onHover={onHover}
      />
    </div>
  );
}

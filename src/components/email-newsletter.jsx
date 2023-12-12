import Input from "./input";
import Button from "./button";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

// eslint-disable-next-line react/prop-types
export default function Emailnewsletter({ title }) {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    return emailjs
      .send(
        "service_e79195l",
        "template_09i1zpb",
        {
          email: e.target[0].value,
        },
        "AIEdkPKy-nCP8gqKw"
      )
      .then(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="w-full lg:mt-7 mt-7" onSubmit={sendEmail}>
      <div className="flex items-center justify-between">
        <Input style={{ width: "60%" }} />
        <Button title={t(title)} style={{ width: "38%", height: "100%" }} />
      </div>
    </form>
  );
}

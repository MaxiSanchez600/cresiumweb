import Input from "./input";
import Button from "./button";
export default function Emailnewsletter() {
  const style1 = {
    width: "60%",
  };

  return (
    <form className="w-full mt-5">
      <div className="flex items-center justify-around">
        <div className="" style={style1}>
          <Input />
        </div>
        <div className="">
          <Button title="Empezá ahora - sin costo" />
        </div>
      </div>
    </form>
  );
}

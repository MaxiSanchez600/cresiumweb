/* eslint-disable react/prop-types */
import Text from "./text";
export default function SolutionCard({
  title,
  description,
  src,
  imgpositon,
  bgacive = false,
  width = "90%",
}) {
  const style = {
    width: width,
  };

  return (
    <div
      className={`rounded-[30px] py-4 px-3 transition duration-200 cursor-default ease-out  ${
        bgacive ? "sm:bg-[#f6dccf] sm:shadow-lg" : "sm:bg-inherit"
      } bg-[#FFFFFF5E]`}
    >
      {imgpositon === "top" && <img src={src} className="w-16 mx-auto py-4" />}
      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-[#000000] font-NeueHaasDisplayBold text-center mx-auto lg:text-2xl text-xl"
        style={style}
      ></h2>
      {imgpositon === "middle" && (
        <img src={src} className="w-16 mx-auto py-4" />
      )}
      <Text text={description} align="center" width={width} mx={"auto"} />
    </div>
  );
}

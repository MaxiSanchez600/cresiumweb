/* eslint-disable react/prop-types */
import Text from "./text";
export default function SolutionCard({
  id,
  title,
  description,
  src,
  imgpositon,
  bgacive = false,
  width = "90%",
  onHover,
}) {
  const style = {
    width: width,
  };

  return (
    <div
      onMouseOver={onHover}
      id={id}
      className={`min-h-50 rounded-[30px] px-3 transition duration-200 cursor-default duration-500 ease-out-custom  ${
        bgacive
          ? "sm:bg-[#f6dccf] sm:shadow-lg animate-slide-up"
          : "sm:bg-inherit"
      } bg-[#FFFFFF5E] flex flex-col h-80 items-center justify-center`}
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

/* eslint-disable react/prop-types */
import Text from "./text";
export default function TestimonialCard({ title, description, src,position }) {
  return (
    <div
      className={`rounded-[15px]   py-4 lg:px-[4.2rem] px-2  drop-shadow-sm hover:drop-shadow-xl hover:scale-105 transition duration-300 cursor-default ease-out hover:ease-in	  bg-[#FFFFFF40] `}
    >
      <Text text={description} align="center" italic={true} color="#000000" width={"90%"} mx={"auto"} />
      <img src={src} className="w-12 py-2 mx-auto" />
      <h2
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-[#000000] font-NeueHaasDisplayBold text-center font-bold  not-italic	 text-md pt-4"
      ></h2>
      <Text text={position} size={'md'}  align='center'/>
    </div>
  );
}

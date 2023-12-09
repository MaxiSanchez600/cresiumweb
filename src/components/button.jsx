/* eslint-disable react/prop-types */
export default function Button({ float, title }) {
  return (
    <button
      style={{
        float: float,
      }}
      className={`bg-gradient-to-r xl:text-[15px] sm:text-sm  text-[10px] hover:from-[#c5430f] hover:to-[#c5430f] hover:shadow-md hover:scale-105  transition duration-200 ease-out w-fit hover:ease-in  from-[#EE7C1F] to-[#E8581F] rounded-[13.27px] sm:px-4 px-2 sm:py-[0.6rem]  py-[0.9rem] text-white font-NeueHaasDisplayBold`}
    >
      {title}
    </button>
  );
}

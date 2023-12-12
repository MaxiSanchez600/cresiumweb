/* eslint-disable react/prop-types */
export default function Title({ title }) {
  return (
    <h2
      dangerouslySetInnerHTML={{ __html: title }}
      className="text-[#1B1C20] lg:text-4xl text-xl animate_fadeInUp sm:w-[90%] mx-auto font-NeueHaasDisplayBold text-center"
    />
  );
}

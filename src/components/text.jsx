/* eslint-disable react/prop-types */
export default function Text({
  text,
  width,
  align,
  size,
  color = "#383A47",
  mx,
  italic = false,
}) {
  const style = {
    width: width,
    textAlign: align,
    color: color,
  };

  return (
    <p
      dangerouslySetInnerHTML={{ __html: text }}
      className={`text-${size} mx-${mx} font-NeueHaasDisplayRoman ${
        italic ? "italic" : "not-italic"
      }	 animate_fadeInUp py-2 text-[${color}]`}
      style={style}
    ></p>
  );
}

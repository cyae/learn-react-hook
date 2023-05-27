import { useImperativeHandle } from "react";

const CustomInput = ({ style, ...props }, ref) => {
  useImperativeHandle(
    ref,

    // ref now points to this function
    () => {
      return { alertHi: () => alert("hi") };
    },
    [] // only once.
  );

  return (
    <input
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
};

export default CustomInput;

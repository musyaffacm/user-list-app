export default function Button({
  type = "button",
  onClick = (e) => undefined,
  variant,
  size = "md",
  fullWidth = false,
  disabled,
  children,
  className,
  ...props
}) {
  const sizeClass = () => {
    switch (size) {
      case "xs":
        // horizontal padding: 10px
        // vertical padding: 14px
        // font size: 14px
        return "gap-1 px-3.5 py-2.5 text-sm";

      case "sm":
        // horizontal padding: 12px
        // vertical padding: 16px
        // font size: 16px
        return "gap-2 px-4 py-3";

      case "md":
        // horizontal padding: 14px
        // vertical padding: 18px
        // font size: 18px
        return "gap-2 px-[18px] py-3.5 text-lg";

      case "lg":
        // horizontal padding: 16px
        // vertical padding: 24px
        // font size: 24px
        return "gap-3 px-6 py-4  text-2xl ";

      // case "xl":
      //   return "gap-3 px-[18px] py-[14px] text-lg ";

      default:
        return "gap-2 px-3 py-1.5 text-sm";
    }
  };

  const variantClass = () => {
    switch (variant) {
      case "danger":
        return "text-white bg-red-500 ring-red-500 hover:bg-red-400 hover:ring-red-400";

      case "primary":
        return "text-white bg-[#3661EB] ring-[#3661EB] hover:bg-blue-500 hover:ring-blue-500";

      case "secondary":
        return "text-[#3661EB] bg-[#E9E7FF] ring-[#E9E7FF] hover:bg-slate-50";

      case "secondary-blue-ring":
        return "text-blue-io bg-white ring-blue-io hover:bg-slate-50";

      case "success":
        return "text-white bg-[#31CD54] ring-[#31CD54] hover:bg-green-500 hover:ring-green-500";

      case "warning":
        return "text-white bg-yellow-io ring-yellow-io hover:bg-yellow-400 hover:ring-yellow-400";

      default:
        return "text-slate-700 bg-white ring-slate-300 hover:bg-slate-50";
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={(e) => onClick(e)}
      type={type}
      className={`whitespace-nowrap rounded-lg h-fit items-center ring-1 focus:outline-none focus-visible:ring-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:ring-slate-300 ${
        fullWidth ? "flex justify-center w-full" : "inline-flex w-fit justify-between"
      } ${className} ${variantClass()} ${sizeClass()}`}
      {...props}
    >
      {children}
    </button>
  );
}

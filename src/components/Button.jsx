export default function Button({
  type = "button",
  onClick = (e) => undefined,
  variant,
  size = "md",
  disabled,
  children,
}) {
  const sizeClass = () => {
    switch (size) {
      case "sm":
        // horizontal padding: 10px
        // vertical padding: 14px
        // font size: 14px
        return "gap-1 px-3.5 py-2.5 text-sm";

      case "lg":
        // horizontal padding: 14px
        // vertical padding: 18px
        // font size: 18px
        return "gap-2 px-[18px] py-3.5 text-lg";

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

      case "success":
        return "text-white bg-[#31CD54] ring-[#31CD54] hover:bg-green-500 hover:ring-green-500";

      case "warning":
        return "text-white bg-yellow-400 ring-yellow-io hover:bg-yellow-300 hover:ring-yellow-300";

      default:
        return "text-slate-700 bg-white ring-slate-300 hover:bg-slate-50";
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={(e) => onClick(e)}
      type={type}
      className={`whitespace-nowrap h-fit items-center ring-1 focus:outline-none focus-visible:ring-2 disabled:bg-slate-300 disabled:text-slate-500 disabled:ring-slate-300inline-flex w-fit justify-between rounded-md ${variantClass()} ${sizeClass()}`}
    >
      {children}
    </button>
  );
}

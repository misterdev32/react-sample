import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    deep_orange_A400: "bg-deep_orange-A400 text-white-A700",
    white_A700: "bg-white-A700",
    green_700: "bg-green-700 text-white-A700",
    purple_500: "bg-purple-500 text-white-A700",
    gray_100: "bg-gray-100 text-black-900",
    orange_A700: "bg-orange-A700 text-white-A700",
    red_900: "bg-red-900 text-white-A700",
    gray_50: "bg-gray-50 text-black-900",
    bluegray_900: "bg-bluegray-900 text-white-A700",
    black_900: "bg-black-900 text-white-A700",
  },
  outline: {
    bluegray_900: "border border-bluegray-900 border-solid text-bluegray-900",
    white_A700: "border border-solid border-white-A700 text-white-A700",
  },
} as const;
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "pl-[11px] py-[11px]",
  lg: "p-3",
  xl: "p-[15px]",
  "2xl": "p-[18px]",
} as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "md",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };

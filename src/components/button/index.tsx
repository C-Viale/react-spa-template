import { ComponentPropsWithRef } from "react";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  loading?: boolean;
}

export function Button({ loading, children, disabled, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
      disabled={disabled || loading}
      {...props}
    >
      {children}
    </button>
  );
}

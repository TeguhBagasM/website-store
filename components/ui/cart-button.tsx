import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface CartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        className={cn(
          `
      w-auto
      rounded-full
      border-transparent
      px-5py-3
      disabled:cursor-not-allowed
      disabled:opacity-50
      text-white
      font-semibold
      hover:opacity-75
      transition
      `,
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
CartButton.displayName = "CartButton";
export default CartButton;

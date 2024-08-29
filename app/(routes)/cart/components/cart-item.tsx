"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex items-center py-6 border-b border-gray-200">
      <div className="relative h-24 w-24 sm:h-48 sm:w-48 overflow-hidden rounded-md shadow-md">
        <Image fill src={data.images[0]?.url} alt={data.name} className="object-cover object-center" />
      </div>
      <div className="flex-1 ml-4 sm:ml-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">{data.name}</h3>
            <p className="mt-1 text-sm">
              <Currency value={data.price} />
            </p>
          </div>
          <div>
            <IconButton
              onClick={onRemove}
              icon={<X size={20} className="text-gray-600 hover:text-red-500 transition-colors" />}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

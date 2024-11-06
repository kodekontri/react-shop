import { Button } from "@/components/ui/button";
import { cartContext } from "@/context/cartContext";
import { useContext } from "react";

export default function ProductQuickView({ product }) {
  const { addItem } = useContext(cartContext);
  return (
    <div className="h-screen flex flex-col">
      <img className="h-96 mx-auto" src={product.image} alt={product.name} />
      <div className="overflow-y-auto">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-xl font-medium py-2 flex-1">{product.name}</h2>
          <p className="font-medium text-lg">${product.price}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 py-2">
          <Button onClick={() => addItem(product.id)}>Add to Cart</Button>
          <Button variant="secondary">Buy Now</Button>
        </div>

        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
}

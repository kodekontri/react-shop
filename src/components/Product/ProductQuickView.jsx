import { Button } from "@/components/ui/button";

const product = {
  name: "Fake product name",
  price: 500,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis reiciendis velit. Corporis sunt totam ipsa ipsam hic sapiente animi.",
};

export default function ProductQuickView() {
  return (
    <div className="h-screen flex flex-col">
      <img
        className="h-96 mx-auto"
        src="https://tailwindui.com/plus/img/ecommerce-images/product-quick-preview-02-detail.jpg"
        alt="image"
      />
      <div className="overflow-y-auto">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-xl font-medium py-2 flex-1">{product.name}</h2>
          <p className="font-medium text-lg">${product.price}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 py-2">
          <Button>Add to Cart</Button>
          <Button variant="secondary">Buy Now</Button>
        </div>

        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
}

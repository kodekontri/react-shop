import Navbar from "@/components/Navbar";
import ProductList from "@/components/Product/ProductList";
import { Toaster } from "@/components/ui/sonner";
import { CartProvider } from "@/context/cartContext";

function Store() {
  return (
    <CartProvider>
      <Navbar />
      <ProductList />
      <Toaster position="top" />
    </CartProvider>
  );
}

export default Store;

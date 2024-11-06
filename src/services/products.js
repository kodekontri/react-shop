import { db } from "@/firebase";
import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getAllProducts = async () => {
  const q = query(collection(db, "products"));
  const querySnapShop = await getDocs(q);
  const products = [];

  querySnapShop.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};

export const getProductsWithIds = async (ids) => {
  const q = query(collection(db, "products"), where(documentId(), "in", ids));
  const querySnapShot = await getDocs(q);
  const products = [];

  querySnapShot.forEach((doc) => {
    products.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return products;
};

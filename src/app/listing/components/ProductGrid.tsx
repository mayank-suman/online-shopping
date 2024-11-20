import React from "react";
import ItemCard from "./ItemCard";
import { Products } from "../definitions";

function ProductGrid({
  products,
  isProductDataLoading,
}: {
  products: Products;
  isProductDataLoading: boolean;
}) {
  return (
    <div className="lg:col-span-3">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isProductDataLoading ? (
            <p className="">Loading</p>
          ) : (
            products.map((product) => (
              <ItemCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;

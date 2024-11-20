import Image from "next/image";
import React from "react";
import { Product } from "../definitions";

function ItemCard({ product }: { product: Product }) {
  return (
    <a key={product.id} href="#" className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
        <Image
          alt={product.description}
          src={product.image}
          className="size-full object-contain object-center group-hover:opacity-75"
          fill
          sizes="(max-widxth: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          // width="100x"
          // height={100}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </a>
  );
}

export default ItemCard;

import Image from "next/image";

export default async function page() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  //   console.log("🚀 ~ page ~ products:", products);

  return (
    <div>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
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
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

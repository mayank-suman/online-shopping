"use client";

import FilterDialog from "./components/mobile/FilterDialog";
import { useEffect, useRef, useState } from "react";
import { Filters, Products } from "./definitions";
import { getFilters } from "./utilities";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import SortDropdown from "./components/SortDropdown";

export default function Page() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false);
  const originalProductsData = useRef<Products>([]);
  const [products, setProducts] = useState<Products>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>([]);

  const onFilterChange = (newFilters: Array<string>) => {
    const filteredProducts = [...originalProductsData.current].filter(
      (currProduct) => newFilters.includes(currProduct.category)
    );

    setProducts(
      newFilters.length > 0 ? filteredProducts : originalProductsData.current
    );
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        originalProductsData.current = data;
        setProducts(data);
        setFilters(getFilters(data));
      } catch (error) {
        setProducts([]);
        console.log("🚀 ~ useEffect ~ error:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <FilterDialog
            filters={filters}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
            selectedFilters={onFilterChange}
          ></FilterDialog>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SortDropdown setMobileFiltersOpen={setMobileFiltersOpen} />
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <Sidebar filters={filters} selectedFilters={onFilterChange} />

                {/* Product grid */}
                <ProductGrid
                  products={products}
                  isProductDataLoading={isLoading}
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

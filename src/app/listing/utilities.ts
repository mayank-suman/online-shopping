import { Filters, Products } from "./definitions";

export const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];

export const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export const derivedCat = (products: Products) =>
  products
    .map((p) => p.category)
    .filter((value, index, arr) => arr.indexOf(value) === index);

export const getFilters = (products: Products): Filters => [
  {
    id: "category",
    name: "Category",
    options: derivedCat(products).map((cat) => ({
      value: cat,
      label: cat,
      checked: false,
    })),
  },
];

export function getSelectedCheckboxes(e: React.ChangeEvent<HTMLInputElement>) {
  const filterType = e.target.name;
  const currentCheckedCheckboxes: Array<string> = [];
  const currentCheckedNodes = document.querySelectorAll(
    `input[type=checkbox][name=${filterType}]:checked`
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentCheckedNodes.forEach(function (currentNode: any) {
    currentCheckedCheckboxes.push(currentNode.value);
  });
  return currentCheckedCheckboxes;
}

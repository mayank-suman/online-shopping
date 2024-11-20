export type Product = {
  id: string;
  title: string;
  price: 109.95;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Products = Product[];

export type Filter = {
  id: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
    checked: boolean;
  }>;
};

export type Filters = Array<Filter>;

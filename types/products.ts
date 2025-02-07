export interface Product {
  _id: string;
  title: string;
  _type: "product";
  slug: {
    _type: "slug";
    current: string;
  };
  productImage?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  };
  inventory : number;
  price: number;
  description: string;
}


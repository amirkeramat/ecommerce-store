export interface Store {
  id: string;
  name: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Image {
  id: string;
  url: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  size: Size;
  color: Color;
  images: Image[];
  isFeatured: boolean;
}

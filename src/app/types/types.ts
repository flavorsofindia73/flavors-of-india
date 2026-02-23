export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
};
//header data type
export interface HeaderDataType {
  name: string;
  path: string;
}

//values data type
export interface ValueDataType {
  title: string;
  description: string;
}

export interface PopularItemsDataType  {
    id: number,
    name: string,
    price: string,
    image: string,
    alt: string
}


export interface PopularCategoriesDataType {
      id: number,
      name: string,
      discount: string,
      image: string,
      alt: string
    }

    
export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};


export interface CategoryCard {
  name: string;
  slug: string;
  description: string;
  itemCount: number;
}


export interface CategoryMenuProps {
  items: MenuItem[] | any[];
}

export interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export type MenuCategoryProps = {
  categoryName: string;
  items: MenuItem[];
};


export interface CategoryCard {
  name: string;
  slug: string;
  description: string;
  image?: string;
  itemCount: number;
}
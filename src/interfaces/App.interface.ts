export interface IAppContext {
  cartItems: ItemProp[],
  setCartItems: any,
}

export interface ItemProp {
  id: string;
  photo: string;
  name: string;
  type: string;
  value: string;
  promoValue: number;
  product_desc: string;
  product_full_desc: string;
  product_composition: string;
}

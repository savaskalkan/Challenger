export interface iProduct {
  colour: string;
  id: number;
  img?: string;
  name: string;
  price: number;
  quantity?: number;
}
export interface iGeneralState {
  productList: iProduct[];
  basketList: iProduct[];
}

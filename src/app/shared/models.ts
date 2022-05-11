export interface Flavor {
  flavorName: string;
  flavorCapacity: number;
}

export interface Amount {
  amountName: string;
  amountCapacity: number;
}

export interface Order {
  date: string;
  flavorName: string;
  amountCapacity: number;
  quantity: number;
}

export interface OrderData {
  flavorName: string;
  amountCapacity: number;
  quantity: number;
}

export interface User {
  role: string;
  userName: string;
  flavors: Flavor[];
  amounts: Amount[];
  favoriteFlavors: string[];
  orders: Order[];
}

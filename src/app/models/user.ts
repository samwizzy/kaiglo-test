import { Gender } from '../enum/gender';
import { UserRole } from '../enum/role';

import { Address } from './shipping';
import { BoughtItem } from './bought-items';
import { Cart } from './cart';
import { Product } from './product';
import { WishList } from './wishlist';

export interface User {
  id: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  emailCountDown: number;
  phone: string;
  pictureUrl?: string;
  fullName: string;
  address: Address[];
  roles: UserRole[];
  cart: Cart[];
  boughtItems: BoughtItem[];
  wishListItems: Product[]; //(WishList | Product)[];
  day: number;
  week: number;
  month: number;
  year: number;
  gender: Gender;
  active: boolean;
  cartItemSize: number | null;
  receivedDailyReward: boolean;
  currentOtp: string | null;
  platform: string;
  provider: string;
  lastLoggedIn: string;
  firebaseToken: string | null;
  updatedDate: string;
  newUser: boolean;
  dob: string;
  createdDate: string;
}

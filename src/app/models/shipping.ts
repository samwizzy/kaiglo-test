export interface Address {
  city: string;
  defaultAddress: boolean;
  firstName: string;
  lastName: string;
  name: string;
  phoneNumber: string;
  state: string;
  id?: string;
}

export interface AddressShippingResponse {
  name: string;
  price: string;
  paidOnDelivery: boolean;
}

export interface AddressShippingData {
  name: string;
  price: string;
  paidOnDelivery: boolean;
}

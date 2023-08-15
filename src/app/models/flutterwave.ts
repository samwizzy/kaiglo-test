export interface FlutterwavePayload {
  amount: string;
  currency: string;
  customer: {
    email: string;
    name: string;
    phonenumber: string;
  };
  customizations: {
    logo: string;
    title: string;
  };
  meta: {
    consumer_id: string;
    consumer_mac: string;
  };
  redirect_url: string;
  tx_ref: string;
}

export interface FlutterwaveResponse {
  data: {
    link: string;
  };
  message: string;
  status: string;
}

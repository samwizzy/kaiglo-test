export interface StoreBankDetails {
    account_name: string;
    account_number: number;
    bank: {
        id: number;
        name: string;
    }
    id: string;
}

export interface BankResponse {
    id: number;
    name: string;
}
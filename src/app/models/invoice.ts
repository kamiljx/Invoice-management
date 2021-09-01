export interface invoice {
    key?: any
    address: string;
    customer: string;
    number: number;
    suppilier:{
        address: string;
        bankAccount: string;
        name: string;
        vatNo: number
    }
    taxNo: string
    invoiceItems: any;
}
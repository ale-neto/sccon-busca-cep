import { AddressModel } from "./address.model";

export interface HistoryAddress {
  id: number;
  cep: string;
  address: AddressModel;
  date: Date;
}
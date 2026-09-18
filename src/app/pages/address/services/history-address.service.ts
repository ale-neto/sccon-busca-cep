import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressModel, HistoryAddress } from '../models';

@Injectable({ providedIn: 'root' })
export class HistoryAddressService {
  private readonly historySubject = new BehaviorSubject<HistoryAddress[]>([]);
  readonly history$ = this.historySubject.asObservable();

  add(cep: string, address: AddressModel): void {
    const entry: HistoryAddress = {
      id: this.historySubject.value.length + 1,
      cep,
      address,
      date: new Date(),
    };

    this.historySubject.next([...this.historySubject.value, entry]);
  }

  remove(id: number): void {
    this.historySubject.next(this.historySubject.value.filter((item) => item.id !== id));
  }

  find(cep: string): HistoryAddress | any {
    return this.historySubject.value.find((item) => item.cep === cep);
  }
}
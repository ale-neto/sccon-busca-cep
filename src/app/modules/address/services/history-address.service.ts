import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressModel, HistoryAddress } from '../models';

const STORAGE_KEY = 'history-address';

@Injectable({ providedIn: 'root' })
export class HistoryAddressService {
  private readonly historySubject = new BehaviorSubject<HistoryAddress[]>(this.load());
  readonly history$ = this.historySubject.asObservable();

  add(cep: string, address: AddressModel): void {
    const addressData: HistoryAddress = {
      id: this.historySubject.value.length + Date.now(),
      cep,
      address,
      date: new Date(),
    };

    this.update([...this.historySubject.value, addressData]);
  }

  remove(id: number): void {
    this.update(this.historySubject.value.filter((item) => item.id !== id));
  }

  find(cep: string): HistoryAddress | undefined {
    return this.historySubject.value.find((item) => item.cep === cep);
  }

  private update(history: HistoryAddress[]): void {
    this.historySubject.next(history);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }

  private load(): HistoryAddress[] {
    const storage = localStorage.getItem(STORAGE_KEY);

    if (!storage) return [];

    try {
      const data: HistoryAddress[] = JSON.parse(storage);

      return data.map((item) => ({ ...item, date: new Date(item.date) }));
    } catch {
      return [];
    }
  }
}
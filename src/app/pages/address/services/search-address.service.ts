import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { AddressModel } from '../models';
import { HistoryAddressService } from './history-address.service';

@Injectable({ providedIn: 'root' })
export class SearchAddressService {
  private readonly baseUrl = 'https://viacep.com.br/ws';

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);

  readonly loading$ = this.loadingSubject.asObservable();

  constructor(private readonly http: HttpClient, private readonly historyAddress: HistoryAddressService) { }

  public getSearchAddress(cep: string): Observable<AddressModel> {
    this.loadingSubject.next(true);

    const existing = this.historyAddress.find(cep);

    if (existing) {
      this.loadingSubject.next(false);
      return throwError(() => new Error(`Esse CEP: ${cep} ja tem na lista.`));
    }

    return this.http.get<AddressModel>(`${this.baseUrl}/${cep}/json/`).pipe(
      map((address) => {
        if (address.erro) {
          throw new Error('CEP não encontrado');
        }
        return address;
      }),
      tap((address) => {
        this.historyAddress.add(cep, address);
      }),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
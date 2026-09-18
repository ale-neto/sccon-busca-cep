import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { AddressModel } from '../../models';

@Injectable({ providedIn: 'root' })
export class SearchAddressService {
  private readonly baseUrl = 'https://viacep.com.br/ws';

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly addressSubject = new BehaviorSubject<AddressModel | null>(null);

  readonly address$ = this.addressSubject.asObservable();
  readonly loading$ = this.loadingSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  public getSearchAddress(cep: string): Observable<AddressModel> {
    this.loadingSubject.next(true);
    this.addressSubject.next(null)

    return this.http.get<AddressModel>(`${this.baseUrl}/${cep}/json/`).pipe(
      map((address) => {
        if (address.erro) {
          throw new Error('CEP não encontrado');
        }
        return address;
      }),
      tap((address) => this.addressSubject.next(address)),
      finalize(() => this.loadingSubject.next(false)),
    );
  }
}
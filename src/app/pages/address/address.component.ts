import { Component } from '@angular/core';
import { SearchAddressComponent } from './components';
import { CommonModule } from '@angular/common';
import { SearchAddressService } from './services';

@Component({
    standalone: true,
    selector: 'app-address',
    imports: [CommonModule, SearchAddressComponent],
    templateUrl: './address.component.html',
    styleUrl: './address.component.scss',
})
export class AddressComponent {
  readonly address$ = this.service.address$;
  readonly loading$ = this.service.loading$;
  erro: string | null = null;

  constructor(private readonly service: SearchAddressService) {}

  public searchAddress(cep: string): void {
    this.erro = null;

    this.service.getSearchAddress(cep).subscribe({
      error: (err) => (this.erro = err.message),
    });
  }
}

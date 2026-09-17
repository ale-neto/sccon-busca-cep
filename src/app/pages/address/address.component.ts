import { Component } from '@angular/core';
import { AddressSearchComponent } from './components';

@Component({
    standalone: true,
    selector: 'app-address',
    imports: [AddressSearchComponent],
    templateUrl: './address.component.html',
    styleUrl: './address.component.scss',
})
export class AddressComponent {
    public addressSearch(cep: string) {
        console.log(cep)
    }
}
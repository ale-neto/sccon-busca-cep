import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-search-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, NgxMaskDirective],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './search-address.component.html',
  styleUrl: './search-address.component.scss'
})
export class SearchAddressComponent {
  @Output() search = new EventEmitter<string>();
  @Input() loading = false; 

  readonly searchForm = new FormGroup({
    cep: new FormControl('', [Validators.required, Validators.pattern(/^\d{8}$/)]),
  });

  onSubmit(): void {
    const { searchForm, search } = this;

    if (searchForm.invalid) {
      searchForm.markAllAsTouched();
      return;
    }

    search.emit(searchForm.controls.cep.value ?? '');
  }
}
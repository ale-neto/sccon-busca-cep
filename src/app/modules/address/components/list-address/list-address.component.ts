import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HistoryAddressService } from '../../services';
import { HistoryAddress } from '../../models';

@Component({
  standalone: true,
  selector: 'app-list-address',
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './list-address.component.html',
  styleUrl: './list-address.component.scss',
})
export class ListAddressComponent {
  @Input() loading: boolean | null = false;
  readonly displayedColumns = ['cep', 'address', 'date', 'actions'];
  readonly history$ = this.historyService.history$;

  constructor(private readonly historyService: HistoryAddressService) { }

  trackById(_index: number, item: HistoryAddress): number {
    return item.id;
  }

  remove(id: number): void {
    this.historyService.remove(id);
  }
}
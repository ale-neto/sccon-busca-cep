import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header';

@Component({
    standalone: true,
    selector: 'app-default-layout',
    imports: [RouterModule, HeaderComponent],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss',
})
export class DefaultLayoutComponent {

}
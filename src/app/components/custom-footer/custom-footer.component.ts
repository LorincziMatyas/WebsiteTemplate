import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './custom-footer.component.html',
  styleUrl: './custom-footer.component.scss',
})
export class CustomFooterComponent {}

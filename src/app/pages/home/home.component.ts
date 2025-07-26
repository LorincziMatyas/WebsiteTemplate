import { Component } from '@angular/core';
import { CustomFooterComponent } from "../../components/custom-footer/custom-footer.component";
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomFooterComponent, CustomHeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}

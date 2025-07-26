import { Component } from '@angular/core';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";
import { CustomFooterComponent } from "../../components/custom-footer/custom-footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CustomHeaderComponent, CustomFooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}

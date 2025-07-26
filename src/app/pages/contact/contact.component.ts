import { Component } from '@angular/core';
import { CustomHeaderComponent } from "../../components/custom-header/custom-header.component";
import { CustomFooterComponent } from "../../components/custom-footer/custom-footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CustomHeaderComponent, CustomFooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

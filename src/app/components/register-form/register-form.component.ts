import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
})
export class RegisterFormComponent {
  @Output() createAccount = new EventEmitter<void>();

  toggleLogin() {
    this.createAccount.emit();
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  @Output() createAccount = new EventEmitter<void>();

  toggleLogin() {
    this.createAccount.emit();
  }
}

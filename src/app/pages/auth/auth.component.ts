import { Component } from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, RegisterFormComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  animations: [
    trigger('formTransition', [
      state(
        'login',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'register',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('login <=> register', [
        style({
          opacity: 0,
          transform: 'translateX(-200px)',
        }),
        animate(
          '1000ms ease-in-out',
          style({
            opacity: 1,
            transform: 'translateX(200)',
          })
        ),
      ]),
    ]),
  ],
})

export class AuthComponent {
  isLogin = true;

  toggleLogin() {
    this.isLogin = !this.isLogin;
  }
}

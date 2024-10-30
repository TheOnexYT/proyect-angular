import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.email, this.password)
      .then(res => {
        console.log('Inicio de sesión exitoso', res);
      })
      .catch(err => {
        console.error('Error en el inicio de sesión', err);
      });
  }
}


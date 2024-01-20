import { Component } from '@angular/core';
import { AuthService } from '../../../service/AuthService';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    console.log("Login method called");
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log("Login method called in IF");

      this.authService.login(username, password).subscribe(
        (response) => {

          const accessToken = response.accessToken;
          console.log("token here: " + accessToken);

          const authorities: string[] = response.authorities.map((authority: { authority: any; }) => authority.authority);
          console.log("authorities here: " + authorities);
          localStorage.setItem('token', accessToken);
          localStorage.setItem('authorities', JSON.stringify(authorities));

          this.router.navigate(['/']); 
        },
        (error) => {
          // Manejar errores
          console.error('Error en el inicio de sesión', error);
        
        }
      );
    }
  }

}

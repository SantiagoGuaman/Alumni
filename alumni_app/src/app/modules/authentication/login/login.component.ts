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
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.authService.login(username, password).subscribe(
        (response) => {
      
          const token = response.token;

          
          localStorage.setItem('token', token);

        
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
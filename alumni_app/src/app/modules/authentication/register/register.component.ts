import { Component, ViewChild } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { Persona } from '../../../model/persona';
import { NgForm } from '@angular/forms';
import { PersonaService } from '../../../service/PersonService';
import { UserService } from '../../../service/UserService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  usuario: Usuario = new Usuario();
  usuarios: any;
  persona: Persona = new Persona();
  personas: any;

  @ViewChild('crearForm') crearForm!: NgForm;

  constructor(private personService: PersonaService, private userService: UserService) {

  };
  
  /*
  public listarPersonas() {
    this.personService.getPersonById().subscribe((resp: any) => {
      console.log(resp.data);
      this.personaB = resp.data;
    });
  }*/

  public create(): void {
    this.personService.createPerson(this.persona).subscribe(
      usuario => {
        if (usuario != null) {
        } else {
        }
      }
    );
  }

}

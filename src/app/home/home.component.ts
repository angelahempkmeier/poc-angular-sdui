import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userData = {
    name: '',
    email: '',
    birthDate: ''
  };

  constructor(private router : Router) {}

  onSubmit() {
    console.log('Dados enviados: ', this.userData);
    this.router.navigate(['/about']);
  }

  onCancel() {
    this.userData = {
      name: '',
      email: '',
      birthDate: ''
    };
  }
}

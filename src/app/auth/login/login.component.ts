import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }
    console.log(formData);
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log('enteredEmail', enteredEmail);
    console.log('enteredPassword', enteredPassword);
  }
}

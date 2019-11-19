import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  listEmployees: Employee[] = [
    {
      name: 'Mark',
      phoneNumber: 2345978647,
    },
    {
      name: 'Mary',
      phoneNumber: 2345978640,
    },
    {
      name: 'John',
      phoneNumber: 5432978640,
    }
  ];
}

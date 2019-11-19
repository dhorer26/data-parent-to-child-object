import { Component, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html'
})
export class DisplayStudentComponent {
  @Input() employee: Employee;
}

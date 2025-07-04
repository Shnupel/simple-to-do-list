import { Component, Input } from '@angular/core';

interface FormValuesInterface {
  title: string;
  description: string;
}

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.scss'],
  standalone: false
})
export class CreateTaskFormComponent {
  constructor() { }

  @Input() formSubmitHandler?: (values: FormValuesInterface, isCorrect: boolean | null) => void;

  public formModel = {
    title: "",
    description: "",
  }

  public formSubmit(values: FormValuesInterface, isCorrect: boolean | null) {
    if (this.formSubmitHandler) this.formSubmitHandler(values, isCorrect);
  }
}

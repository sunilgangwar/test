import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube1';
  tutInfo;
  constructor(private formBuid: FormBuilder) {
    this.tutInfo = this.formBuid.group({
      user: '',
      address: '',
    })
  }
  onSubmit() {
    console.log(this.tutInfo.value);
  }
}

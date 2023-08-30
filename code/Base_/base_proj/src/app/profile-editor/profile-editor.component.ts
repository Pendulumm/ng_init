import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['']
  });

  constructor(private fb: FormBuilder) {
    this.profileForm.valueChanges.subscribe((value) => {
      console.log('profileForm subscription>>>', value);
    })
  }
  ngOnInit(): void {
    console.log('profileForm>>>', this.profileForm);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('onSubmit... >>>', this.profileForm.value);
    console.log('profileForm>>>', this.profileForm);
  }
}

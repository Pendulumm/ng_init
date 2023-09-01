import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';
import { HeroesService } from './hero.service';
import { UniqueAlterEgoValidator } from './alter-ego.directive';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  /* profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['']
  }); */
  profileForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),
      forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
    ]),
    lastName: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(4),],
      asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
      updateOn: 'change'
    }),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('', Validators.required),
      zip: new FormControl('')
    })
  });
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get state() { return this.profileForm.get('address')?.get('state'); }

  constructor(
    private fb: FormBuilder,
    private alterEgoValidator: UniqueAlterEgoValidator
  ) {
    this.profileForm.valueChanges.subscribe((value) => {
      // console.log('profileForm subscription>>>', value);
    });
    // this.profileForm.statusChanges.subscribe((value) => {
    //   console.log('profileForm statusChange>>>', value);
    // });

    // this.lastName
  }
  ngOnInit(): void {
    // console.log('profileForm>>>', this.profileForm);
    console.log('firstName formControl >>>', this.firstName);
    console.log('lastName formControl >>>', this.lastName);
    // console.log('state formControl >>>', this.state);
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('onSubmit... >>>', this.profileForm.value);
    console.log('profileForm>>>', this.profileForm);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
  // The new value for the control that matches the structure of the group.
  updateProfileBySetVal() {
    this.profileForm.setValue({
      firstName: 'Tom',
      lastName: 'Blue',
      address: {
        street: 'street1',
        city: 'city1',
        state: 'state1',
        zip: 'zip1'
      }
    })
  }
  modelChange() {
    // console.log('modelChange,firstName >>>', this.firstName);
    // console.log('modelChange,lastName >>>', this.lastName);
    // console.log('state formControl >>>', this.state);
  }

}

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}





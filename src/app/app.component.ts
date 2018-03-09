import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Signup } from './signup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: FormGroup;
  private formValues: any;
  public name:string;
  public validationMessage :any;

  constructor(private fb: FormBuilder) { }
  ngOnInit() {

    // this.user = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    //   account: new FormGroup({
    //     email: new FormControl('', [Validators.required]),
    //     confirm: new FormControl('', [Validators.required])
    //   })
    // });
    this.formValues = {
      name: 'Rajkamal',
      account: {
        email: 'rajkamal@gmail.com'
      }
	}
	
	this.validationMessage={
		needExc : 'Exclamation mark missing',
		needSpecialChara : 'Special Chaarcter missing',
		needRequiredField : ' This field is required',
		emailRequired : 'Email required'
	}

	// this.validationMessage = 'kkkk'

    this.user = this.fb.group({
      name: [this.formValues.name, [Validators.required, Validators.minLength(5), this.hasExc, this.hasSpecialChara]],
      account: this.fb.group({
        email: [this.formValues.account.email, Validators.required],
        confirm: ['', Validators.required]
      })
    });



  }

  onSubmit({ value, valid }: { value: Signup, valid: boolean }) {
	console.log(value.name, valid);
	
	this.name = value.name;
  }


  hasExc(input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { needsExclamation: true };
  }

  hasSpecialChara(input: FormControl) {
    const hasSpecialChara = input.value.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/);
    return hasSpecialChara ? null : { needsSpecialChara: true };
  }

//   validInput(input: FormControl){
// 		return function(input){
// 			if(input.value.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)){
// 				return null;
// 			}else{
// 				let s = 1;
// 				this.validValue();
// 			}
// 		}
//   }

  validValue(){
	  alert();
  }

  // public checkPasswordConditions(input: FormControl) {
  //   return function (input) {
  //     let count = 0;
  //     if (input.value.match(/[0-9]/)) {
  //       count += 1;
  //     }
  //     if (input.value.match(/[A-Z]/)) {
  //       count += 1;
  //     }
  //     if (input.value.match(/[a-z]/)) {
  //       count += 1;
  //     }
  //     if (input.value.match(/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)) {
  //       count += 1;
  //     }
  //     return count >= 3 ? true : { strongPassword: true };
  //   };
  // }
}

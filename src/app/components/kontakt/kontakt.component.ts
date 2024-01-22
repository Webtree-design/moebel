import { Component,ViewChild } from '@angular/core';
import { env } from 'src/env';


import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

// import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent {
  public form: any = {
    eName: '',
    eEmail: '',
    eBetreff: '',
    eMessage: '',
    eCheckbox: false,
  };
  constructor(
    public snackBar: MatSnackBar,
    // public contactService: ContactService,
    private formBuilder: FormBuilder
  ) {}
  nineFormGroup = this.formBuilder.group({
    eName: ['', [Validators.required, Validators.minLength(1)]],
    eEmail: ['', [Validators.required, Validators.email]],
    eBetreff: ['', [Validators.required, Validators.minLength(1)]],
    eMessage: ['', [Validators.required, Validators.minLength(1)]],
    eCheckbox: [false, Validators.required],
  });
  ngOnInit() {}

  openSnackBar(message: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['custom-snackbar'];
    config.horizontalPosition = 'start';
    config.verticalPosition = 'bottom';
    config.duration = 3000;
    this.snackBar.open(message, '', config);
  }
  public async createEmail() {
    // if (!this.nineFormGroup.valid) return;
    const nineOptionName = this.nineFormGroup.get('eName')!.value;
    const nineOptionMail = this.nineFormGroup.get('eEmail')!.value;
    const nineOptionBetreff = this.nineFormGroup.get('eBetreff')!.value;
    const nineOptionMsg = this.nineFormGroup.get('eMessage')!.value;

    const form = {
      eName: nineOptionName,
      eEmail: nineOptionMail,
      eMessage: nineOptionMsg,
      eBetreff: nineOptionBetreff,
      eEmailTo: env.eEmailTo,
      eCompany: env.eCompany,
      SMTPMail: env.SMTPMail,
    };
    // console.log(form);

    // this.contactService.createEmail(form).subscribe((res) => {
    //   this.form = this.formBuilder.group({
    //     eName: ['', Validators.required], // Default value for Name field
    //     eEmail: ['', [Validators.required, Validators.email]], // Default value for Email field
    //     eBetreff: ['', Validators.required], // Default value for Betreff field
    //     eMessage: ['', Validators.required], // Default value for Nachricht field
    //     eCheckbox: [false, Validators.requiredTrue], // Default value for Checkbox field
    //   });
    this.openSnackBar('Email gesendet');
    // });
  }
}

// interface FormData {
//   eName: string;
//   eEmail: string;
//   eBetreff: string;
//   eMessage: string;
//   eCheckbox: boolean;
// }

import { Component, ViewChild } from '@angular/core';
import { env } from 'src/env';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { KontaktService } from 'src/app/services/kontakt.service';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss'],
})
export class KontaktComponent {
  public form: any = {
    eName: '',
    eEmail: '',
    eBetreff: '',
    eMessage: '',
    eCheckbox: false,
  };
  isDisabled: any = 'disbaledButton';
  constructor(
    public snackBar: MatSnackBar,
    public kontactService: KontaktService,
    private formBuilder: FormBuilder
  ) {}
  nineFormGroup = this.formBuilder.group({
    eName: ['', Validators.required],
    eEmail: ['', [Validators.required, Validators.email]],
    eBetreff: ['', Validators.required],
    eMessage: ['', Validators.required],
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
  public async createEmail(htmlform: any) {
    // if (!this.nineFormGroup.valid) return;
    const nineOptionName = this.nineFormGroup.get('eName')!.value;
    const nineOptionMail = this.nineFormGroup.get('eEmail')!.value;
    const nineOptionBetreff = this.nineFormGroup.get('eBetreff')!.value;
    const nineOptionMsg = this.nineFormGroup.get('eMessage')!.value;

    const form: any = {
      eName: nineOptionName,
      eEmail: nineOptionMail,
      eMessage: nineOptionMsg,
      eBetreff: nineOptionBetreff,
      eEmailTo: env.eEmailTo,
      eCompany: env.eCompany,
      SMTPMail: env.SMTPMail,
    };

    this.kontactService.createEmail(form).subscribe((res) => {
      htmlform.reset();
      this.openSnackBar('Email gesendet');
    });
  }
}

// interface FormData {
//   eName: string;
//   eEmail: string;
//   eBetreff: string;
//   eMessage: string;
//   eCheckbox: boolean;
// }

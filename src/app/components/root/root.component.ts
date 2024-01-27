import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent {
  title = 'moebel';
  public toolbarStyle: any = 'ngStyleBefore';
  firmenmail = 'mail.de';
  width: number = 0;
  public message: any = [];

  one: String = '';
  two: String = '';
  three: String = '';
  four: String = '';
  five: String = '';

  constructor(
    public dataService: DataService,
    public dialog: Dialog,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.width = window.innerWidth;
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.width = window.innerWidth;
  }

  async ngOnInit() {
    await this.getMessage();
    this.message = [];
  }

  openSnackBar(message: string, action: string) {
    if (this.message[0].active != '1') return;
    this.snackBar.open(message, action);
  }

  public async getMessage() {
    this.dataService.getMessage().subscribe((res: any) => {
      if (res.length <= 0 || res.length == undefined) return;
      res.forEach((el: any) => {
        this.message.push(el);
      });
      // this.openDialog();
      this.openSnackBar(this.message[0].title, 'OK!');
    });
  }
}

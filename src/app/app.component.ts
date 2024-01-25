import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  ViewChild,
} from '@angular/core';
import { DataService } from './services/data.service';
import { PopupComponent } from './components/dialogs/popup/popup.component';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webtreedesign';
  public toolbarStyle: any = 'ngStyleBefore';
  firmenmail = 'mail.de';
  width: number = 0;
  public message: any = [];
  private isBrowser: any;
  one: String = '';
  two: String = '';
  three: String = '';
  four: String = '';

  constructor(
    public dataService: DataService,
    public dialog: Dialog,
    @Inject(PLATFORM_ID) platformId: string,
    private router: Router,
    private elementRef: ElementRef,
    public snackBar: MatSnackBar
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.width = window.innerWidth;
    this.checkElementViewport();
    this.checkElementViewportSections();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.width = window.innerWidth;
    this.checkElementViewportSections();
  }

  async ngOnInit() {
    await this.getMessage();
    this.message = [];
   
  }

  openSnackBar(message: string, action: string) {
    if (this.message[0].active != '1') return;
    this.snackBar.open(message, action);
  }

  // public openDialog() {
  //   if (this.message[0].active != '1') return;
  //   this.dialog.open(PopupComponent, {
  //     data: this.message[0],
  //     panelClass: 'your-dialog-class',
  //   });
  // }

  public async getMessage() {
    this.dataService.getMessage().subscribe((res: any) => {
      if (res.length <= 0 || res.length == undefined) return;
      res.forEach((el: any) => {
        this.message.push(el);
      });
      // this.openDialog();
      this.openSnackBar(this.message[0].title, 'OK!')
    });
  }

  private checkElementViewport() {
    const myElement =
      this.elementRef.nativeElement.querySelector('#routerOutlet');

    const bounding = myElement.getBoundingClientRect();
    if (bounding.top < 0) {
      this.toolbarStyle = 'ngStyleAfter';
    } else {
      this.toolbarStyle = 'ngStyleBefore';
    }
  }

  scroll(el: HTMLElement) {
    if (this.isBrowser) {
      const elementTopPosition = el.getBoundingClientRect().top;
      
        window.scrollTo({
          top: window.pageYOffset + elementTopPosition - 85,
          behavior: 'smooth',
        });
      
      
    }
  }

  checkElementViewportSections() {
    const section1 = this.elementRef.nativeElement
      .querySelector('#section1')
      .getBoundingClientRect();

    const section2 = this.elementRef.nativeElement
      .querySelector('#section2')
      .getBoundingClientRect();

    const section3 = this.elementRef.nativeElement
      .querySelector('#section3')
      .getBoundingClientRect();

    const section4 = this.elementRef.nativeElement
      .querySelector('#section4')
      .getBoundingClientRect();

     
    if (section1.top <= 0 && section1.bottom >= 90) {
      this.one = 'oneActive';
    } else {
      this.one = '';
    }
    if (section2.top <= 90 && section2.bottom >= 90) {
      this.two = 'twoActive';
    } else {
      this.two = '';
    }
    if (section3.top <= 90 && section3.bottom >= 90) {
      this.three = 'threeActive';
    } else {
      this.three = '';
    }
    if (section4.top <= 90 && section4.bottom >= 90) {
      this.four = 'fourActive';
    } else {
      this.four = '';
    }
  }
}

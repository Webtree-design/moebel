import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { DataService } from './services/data.service';
import { PopupComponent } from './components/dialogs/popup/popup.component';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harley';
  public toolbarStyle: any = 'ngStyleBefore';
  firmenmail = 'mail.de';
  width: number = 0;
  public message: any = [];
  private isBrowser: any;

  constructor(
    public dataService: DataService,
    public dialog: Dialog,
    @Inject(PLATFORM_ID) platformId: string,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.width = window.innerWidth;
    this.checkElementViewport();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    this.width = window.innerWidth;
  }

  async ngOnInit() {
    await this.getMessage();
    this.message = [];
  }

  public openDialog() {
    if (this.message[0].active != '1') return;
    this.dialog.open(PopupComponent, {
      data: this.message[0],
      panelClass: 'your-dialog-class',
    });
  }

  public async getMessage() {
    // this.dataService.getMessage().subscribe((res: any) => {
    //   if (res.length <= 0 || res.length == undefined ) return;
    //   res.forEach((el: any) => {
    //     this.message.push(el);
    //   });
    //   this.openDialog();
    // });
  }

  private checkElementViewport() {
    console.log('ckeckmate');
    const myElement =
      this.elementRef.nativeElement.querySelector('#routerOutlet');

    const bounding = myElement.getBoundingClientRect();
    console.log(bounding.top);
    if (bounding.top < 0) {
      this.toolbarStyle = 'ngStyleAfter';
    } else {
      this.toolbarStyle = 'ngStyleBefore';
    }
  }

  scroll(el: HTMLElement) {
    if (this.isBrowser) {
      const elementTopPosition = el.getBoundingClientRect().top;
      if (this.width >= 768) {
        window.scrollTo({
          top: window.pageYOffset + elementTopPosition - 80,
          behavior: 'smooth',
        });
      }
      if (this.width < 768) {
        window.scrollTo({
          top: window.pageYOffset + elementTopPosition - 80,
          behavior: 'smooth',
        });
      }
    }
  }
}

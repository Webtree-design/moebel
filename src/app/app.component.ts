import { Component, HostListener, Inject } from '@angular/core';
import { toolbarAnimation } from './core/animations';
import { DataService } from './services/data.service';
import { PopupComponent } from './components/dialogs/popup/popup.component';
import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [toolbarAnimation],
})
export class AppComponent {
  title = 'harley';
  toolbarState = 'top';
  firmenmail = 'mail.de';
  width: number = 0;
  public message: any = [];
  private isBrowser: any;

  constructor(
    public dataService: DataService,
    public dialog: Dialog,
    @Inject(PLATFORM_ID) platformId: string,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.width = window.innerWidth;
    if (window.pageYOffset > 0) {
      this.toolbarState = 'scrolled'; // If scrolled down, change the state to 'scrolled'
    } else {
      this.toolbarState = 'top'; // If at the top, change the state to 'top'
    }
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
    this.dataService.getMessage().subscribe((res: any) => {
      if (res.length <= 0 || res.length == undefined ) return;
      res.forEach((el: any) => {
        this.message.push(el);
      });
      this.openDialog();
    });
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

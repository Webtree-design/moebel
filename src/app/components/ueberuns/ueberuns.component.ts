import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-ueberuns',
  templateUrl: './ueberuns.component.html',
  styleUrls: ['./ueberuns.component.scss']
})
export class UeberunsComponent {
  private isBrowser: any;
  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  scroll2(el: HTMLElement) {
    if (this.isBrowser) {
      const elementTopPosition = el.getBoundingClientRect().bottom;

      window.scrollTo({
        top: window.pageYOffset + elementTopPosition - 90,
        behavior: 'smooth',
      });
    }
  }
}

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  public arrowAnimationState: any = 'active';
  private isBrowser: any;
  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  scroll(el: HTMLElement) {
    if (this.isBrowser) {
      const elementTopPosition = el.getBoundingClientRect().bottom;

      window.scrollTo({
        top: window.pageYOffset + elementTopPosition - 90,
        behavior: 'smooth',
      });
    }
  }
  
}

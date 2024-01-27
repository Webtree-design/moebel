import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImpressumComponent } from './components/impressum/impressum.component';
import { DatenschutzComponent } from './components/datenschutz/datenschutz.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {
    path: 'start',
    component: RootComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

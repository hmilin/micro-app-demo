import { Routes } from '@angular/router';
import { ViteComponent } from './children/vite/vite.component';

export const routes: Routes = [
  {
    path: 'micro-app/vite',
    pathMatch: 'prefix',
    component: ViteComponent,
  },
];

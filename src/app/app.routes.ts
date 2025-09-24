import { Routes } from '@angular/router';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'thank-you', component: ThankYouComponent },
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { BuyComponentComponent } from './pages/buy-component/buy-component.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { SendEmailComponentComponent } from './pages/send-email-component/send-email-component.component';
import { ShoppingComponentComponent } from './pages/shopping-component/shopping-component.component';
const routes: Routes = [
  {
    path: '', component: HomeComponentComponent
  },
  {
    path: 'buy', component: BuyComponentComponent
  },
  {
    path: 'sendEmail', component: SendEmailComponentComponent
  },
  {
    path: 'shopping', component: ShoppingComponentComponent
  },
  {
    path: '**', component: PageNotFoundComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

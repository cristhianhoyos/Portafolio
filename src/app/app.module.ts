import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './componentes/page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './componentes/home-component/home-component.component';
import { SendEmailComponentComponent } from './componentes/send-email-component/send-email-component.component';
import { ShoppingComponentComponent } from './componentes/shopping-component/shopping-component.component';
import { BuyComponentComponent } from './componentes/buy-component/buy-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    HomeComponentComponent,
    SendEmailComponentComponent,
    ShoppingComponentComponent,
    BuyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

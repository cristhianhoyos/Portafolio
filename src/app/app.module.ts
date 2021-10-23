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
import { IconDownloadcvComponent } from './utils/icons/icon-downloadcv/icon-downloadcv.component';
import { IconCopyComponent } from './utils/icons/icon-copy/icon-copy.component';
import { IconSendEmailComponent } from './utils/icons/icon-send-email/icon-send-email.component';
import { IconLinkedComponent } from './utils/icons/icon-linked/icon-linked.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponentComponent,
    HomeComponentComponent,
    SendEmailComponentComponent,
    ShoppingComponentComponent,
    BuyComponentComponent,
    IconDownloadcvComponent,
    IconCopyComponent,
    IconSendEmailComponent,
    IconLinkedComponent
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

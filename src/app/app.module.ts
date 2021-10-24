import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { HomeComponentComponent } from './pages/home-component/home-component.component';
import { SendEmailComponentComponent } from './pages/send-email-component/send-email-component.component';
import { ShoppingComponentComponent } from './pages/shopping-component/shopping-component.component';
import { BuyComponentComponent } from './pages/buy-component/buy-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconDownloadcvComponent } from './utils/icons/icon-downloadcv/icon-downloadcv.component';
import { IconCopyComponent } from './utils/icons/icon-copy/icon-copy.component';
import { IconSendEmailComponent } from './utils/icons/icon-send-email/icon-send-email.component';
import { IconLinkedComponent } from './utils/icons/icon-linked/icon-linked.component';
import { MenuHeaderBarComponent } from './componentes/menu-header-bar/menu-header-bar.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    IconLinkedComponent,
    MenuHeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

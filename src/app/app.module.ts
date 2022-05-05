import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BodyComponent } from './components/body/body.component';
import { BigListComponent } from './components/big-list/big-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AuthStatusComponent } from './components/auth-status/auth-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    BodyComponent,
    BigListComponent,
    ListItemComponent,
    AuthStatusComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

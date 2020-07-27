import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { TemplatesComponent } from './components/templates/templates.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeFooterComponent,
    HomeComponent,
    CreateComponent,
    TemplatesComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatFormFieldModule,
    HttpClientModule,
    ClipboardModule
  
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

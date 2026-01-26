import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//using animation 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';

import { ContactComponent } from './contact/contact.component';

import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
   

    AboutComponent,
    RoomsComponent,

    ContactComponent,
    
     
    
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,BrowserAnimationsModule],//here brwoseranimation for animation
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

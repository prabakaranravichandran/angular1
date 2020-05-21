import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BannerComponent } from './banner/banner.component';
import { SmartreadingComponent } from './smartreading/smartreading.component';
import { HighlightzoneComponent } from './highlightzone/highlightzone.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollTpComponent } from './scroll-tp/scroll-tp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavmenuComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    BannerComponent,
    SmartreadingComponent,
    HighlightzoneComponent,
    FormComponent,
    FooterComponent,
    ScrollTpComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule, HostListener  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/widgets/navbar/navbar.component';
import { SidebarComponent } from './component/widgets/sidebar/sidebar.component';
import { ContentComponent } from './component/widgets/content/content.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './component/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

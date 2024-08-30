import { NgModule, HostListener  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/widgets/navbar/navbar.component';
import { SidebarComponent } from './component/widgets/sidebar/sidebar.component';
import { ContentComponent } from './component/widgets/content/content.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './component/pages/home/home.component';
import { BlogComponent } from './component/pages/blog/blog.component'; // Import BlogComponent
import { FooterComponent } from './component/widgets/footer/footer.component';
import { ServicesComponent } from './component/pages/service-page/service-page.component';
import { AboutComponent } from './component/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './component/pages/home/home.component';
import { BlogComponent } from './component/pages/blog/blog.component';  // Import BlogComponent
import { ServicesComponent } from './component/pages/service-page/service-page.component'; // Import ServicesComponent
import { AboutComponent } from './component/pages/about/about.component'; // Import AboutComponent
import { LoginComponent } from './component/pages/login/login.component'; // Import LoginComponent

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },  // Redirect to 'home' within the layout
      { path: 'login', component: LoginComponent }, // Add Login route
      { path: 'home', component: HomeComponent },  // Homepage route
      { path: 'blog', component: BlogComponent }, // Add Blog route
      { path: 'services', component: ServicesComponent }, // Add Services route
      { path: 'about', component: AboutComponent }, // Add About route
      // Add routes for Blog, Services, Login Page here
    ]
  },
  { path: '**', redirectTo: '' }  // Wildcard route redirects to homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'  // Reload the page when the same URL is clicked
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

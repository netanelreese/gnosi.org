import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './component/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },  // Redirect to 'home' within the layout
      { path: 'home', component: HomeComponent },  // Homepage route
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

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) {
    // Subscribe to the router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === '/content') {
          this.reloadComponent();
        }
      }
    });
  }

  ngOnInit(): void {
    // Component initialization logic
  }

  reloadComponent() {
    // Logic to reload your component or reinitialize data
  }

}

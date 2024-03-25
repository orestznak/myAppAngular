import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(public route:ActivatedRoute,
              private router: Router) {

  }

  navigateTo(route: string): void {
    this.router.navigate([route],{queryParams:{id:3}})
  }
}

// 
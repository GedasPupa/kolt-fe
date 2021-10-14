import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="['/']">KOLT: Scooters</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link nav-a"
                [routerLinkActive]="['active']"
                [routerLink]="['/scooters']"
                >Scooters</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link nav-a"
                [routerLinkActive]="['active']"
                [routerLink]="['/add']"
                >Add</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
    '.active { font-weight: bold;}',
    'a:hover { transform: scale(1.05); padding: 0.5rem 1rem; transition: 0.2s;}',
    '.navbar-brand:hover { padding: 0.3125rem 0 0.3125rem 0; }',
    '.navbar { padding-left: 50px}',
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

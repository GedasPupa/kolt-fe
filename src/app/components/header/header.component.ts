import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
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

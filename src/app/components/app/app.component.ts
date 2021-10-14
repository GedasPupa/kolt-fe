import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styles: ['.container { margin-top: 50px; margin-bottom: 50px}'],
})
export class AppComponent {
  title = 'kolt';
}

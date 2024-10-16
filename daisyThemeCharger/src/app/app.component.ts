import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'daisyThemeCharger';

  override = signal<number>(50);

  constructor() {
    setInterval(() => {
      const override = this.override();
      const nextVal = override >= 100 ? 0 : override + 10;
      this.override.set(nextVal);
    }, 3000);
  }
}

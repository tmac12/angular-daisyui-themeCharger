import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #internalCurrentTheme = signal<string>(this.getSavedTheme());
  currentTheme = this.#internalCurrentTheme.asReadonly();

  effect = effect(() => {
    const theme = this.#internalCurrentTheme();
    //save Theme To Storage
    localStorage.setItem('theme', theme);
  });

  public saveTheme(theme: string): void {
    this.#internalCurrentTheme.set(theme);
  }

  // Apply the theme by adding the theme class to the document body
  public applyTheme(theme: string) {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('data-theme', theme);
  }

  // Retrieve the saved theme from localStorage
  private getSavedTheme(): string {
    return localStorage.getItem('theme') || DARK_THEME; // default to 'dark' theme
  }
}

// export const DARK_THEME = 'breton-carbon-dark';
export const DARK_THEME = 'dark';
export const LIGHT_THEME = 'light';

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private isDarkModeEnabled: boolean = false;
    private readonly documentBody: HTMLBodyElement;

    constructor(@Inject(DOCUMENT) private readonly document: Document) {
        this.documentBody = this.document.body as HTMLBodyElement;
    }

    public themeInit(): void {
        if (localStorage.getItem('theme')) {
            this.isDarkModeEnabled = localStorage.getItem('theme') === 'dark';
        } else {
            this.isDarkModeEnabled = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
        }

        this.updateTheme();
    }

    public toggleTheme(): void {
        this.isDarkModeEnabled = !this.isDarkModeEnabled;

        this.updateTheme();
    }

    private updateTheme(): void {
        const theme: 'light' | 'dark' = this.isDarkModeEnabled
            ? 'dark'
            : 'light';

        this.documentBody.classList.value = '';

        this.documentBody.classList.add(theme);

        localStorage.setItem('theme', theme);
    }
}

import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'notes';

  constructor(private readonly themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.themeInit();
  }
}

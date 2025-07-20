import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dataAtual: Date = new Date();
  private interval: any;

  ngOnInit() {
    this.updateHour();

    this.interval = setInterval(() => this.updateHour(), 1000);
  }
  ngOnDestroy() {    
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateHour(): void {
    this.dataAtual = new Date();
  }
}

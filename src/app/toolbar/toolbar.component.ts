import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  today: number = Date.now();
  dayOpen = true;
  showDay() {
    this.dayOpen = !this.dayOpen;
  }
}

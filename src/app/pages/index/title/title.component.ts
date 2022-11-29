import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  blink: string = 'cursor-on';

  constructor() { }

  ngOnInit(): void {
    this.blinkCursor();
  }

  blinkCursor() {
    setInterval(() => {
      if (this.blink == 'cursor-on')
        this.blink = 'cursor-off';
      else {
        this.blink = 'cursor-on';
      }
    }, 500);

  }

}

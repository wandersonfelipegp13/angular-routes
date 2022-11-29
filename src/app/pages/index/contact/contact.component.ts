import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  seconds: number = 5;
  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.seconds--;

      if (this.seconds == 0) {
        this.router.navigate(['/portfolio']);
      }

    }, 1000);
  }
}

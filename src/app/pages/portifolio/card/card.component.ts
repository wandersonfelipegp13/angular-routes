import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input()
  id: string = '0';

  @Input()
  title: string = 'Card Title';

  @Input()
  image: string = '';

  @Input()
  link: string = '';

  @Input()
  technologies: string = '';

  constructor(private activeRoute: ActivatedRoute) {
    // this.activeRoute.params.subscribe((res) => console.log(res));
    // this.activeRoute.queryParams.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {}
}

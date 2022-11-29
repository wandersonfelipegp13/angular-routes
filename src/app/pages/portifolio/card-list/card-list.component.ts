import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data/data';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  data = Data;

  constructor() {}

  ngOnInit(): void {}
}

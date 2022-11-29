import { Component, OnInit } from '@angular/core';
import { FrontTechs } from 'src/app/data/data';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {

  frontTechs = FrontTechs;

  constructor() { }

  ngOnInit(): void {
  }

}

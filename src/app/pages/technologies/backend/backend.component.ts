import { Component, OnInit } from '@angular/core';
import { BackendTechs } from 'src/app/data/data';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {

  backTechs = BackendTechs;

  constructor() { }

  ngOnInit(): void {
  }

}

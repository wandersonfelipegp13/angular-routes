import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css'],
})
export class ToolsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => console.log(param));
    this.activatedRoute.firstChild?.params?.subscribe((param) =>
      console.log(param)
    );
    this.activatedRoute.queryParamMap.subscribe((qp) => console.log(qp));
  }
}

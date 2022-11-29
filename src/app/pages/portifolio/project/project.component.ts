import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/data/data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  id: string | null = '';
  title: string = 'Project Title';
  image: string = '';
  link: string = '';
  technologies: string[] = [];

  projects = Data;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    const project = Data.filter((project) => project.id == this.id)[0];

    this.title = project.title;
    this.image = project.image;
    this.link = project.link;
    this.technologies = project.technologies;
  }
}

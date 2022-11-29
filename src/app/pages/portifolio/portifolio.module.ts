import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { ProjectComponent } from './project/project.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    ProjectComponent
  ],
  exports: [
    CardComponent,
    CardListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PortifolioModule { }

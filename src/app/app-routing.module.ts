import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/index/contact/contact.component';
import { TitleComponent } from './pages/index/title/title.component';
import { CardListComponent } from './pages/portifolio/card-list/card-list.component';
import { CardComponent } from './pages/portifolio/card/card.component';
import { ProjectComponent } from './pages/portifolio/project/project.component';
import { BackendComponent } from './pages/technologies/backend/backend.component';
import { FrontendComponent } from './pages/technologies/frontend/frontend.component';
import { ToolsComponent } from './pages/technologies/tools/tools.component';

const routes: Routes = [
  { path: '', component: TitleComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: CardListComponent },
  { path: 'portfolio/:id', component: ProjectComponent },
  {
    path: 'tools',
    component: ToolsComponent,
    children: [
      { path: 'backend', component: BackendComponent },
      { path: 'frontend', component: FrontendComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

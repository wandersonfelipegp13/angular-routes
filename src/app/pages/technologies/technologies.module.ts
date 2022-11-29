import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { ToolsComponent } from './tools/tools.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [BackendComponent, FrontendComponent, ToolsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [BackendComponent, FrontendComponent],
})
export class TechnologiesModule {}

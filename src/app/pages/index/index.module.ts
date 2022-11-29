import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [TitleComponent, ContactComponent],
  exports: [TitleComponent, ContactComponent],
  imports: [CommonModule],
})
export class IndexModule {}

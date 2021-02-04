import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { HeaderModule } from '../custom-components/header/header.module';
import { FooterModule } from '../custom-components/footer/footer.module';



@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class ProjectsModule { }

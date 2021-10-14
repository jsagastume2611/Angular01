import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador.component';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContadorComponent
  ],
  providers: [],
})
export class ContadorModule {}

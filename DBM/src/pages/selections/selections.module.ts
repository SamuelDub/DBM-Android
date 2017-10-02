import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectionsPage } from './selections';

@NgModule({
  declarations: [
    SelectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectionsPage),
  ],
})
export class SelectionsPageModule {}

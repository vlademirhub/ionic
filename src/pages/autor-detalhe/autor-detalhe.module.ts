import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorDetalhePage } from './autor-detalhe';

@NgModule({
  declarations: [
    AutorDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AutorDetalhePage),
  ],
})
export class AutorDetalhePageModule {}

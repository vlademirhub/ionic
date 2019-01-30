import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiaDetalhePage } from './noticia-detalhe';

@NgModule({
  declarations: [
    NoticiaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiaDetalhePage),
  ],
})
export class NoticiaDetalhePageModule {}

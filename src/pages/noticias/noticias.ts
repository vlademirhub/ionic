import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticias.services';
import { Noticia } from '../../model/noticias';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias : Noticia[];

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public noticiaService : NoticiaService) {
  }

  ionViewDidLoad() {
    
    this.noticiaService.getNoticias().subscribe(response => {
      this.noticias = response;
    });
  }
  detalhes(n : Noticia){
    this.navCtrl.push('NoticiaDetalhePage',{'noticia': n});
  }

}

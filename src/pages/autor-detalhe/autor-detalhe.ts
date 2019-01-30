import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Autor } from '../../model/autor';

/**
 * Generated class for the AutorDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-autor-detalhe',
  templateUrl: 'autor-detalhe.html',
})
export class AutorDetalhePage {

  autor : Autor;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.get('autor'));
    this.autor = this.navParams.get('autor');
  }

}

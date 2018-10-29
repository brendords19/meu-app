import { LivrosApiProvider } from './../../providers/livros-api/livros-api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar-livros',
  templateUrl: 'buscar-livros.html',
})
export class BuscarLivrosPage {
  livros: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams, private api: LivrosApiProvider) {
  }

  buscarLivros(ev: any){
    const val = ev.target.value;

    if (val && val.trim() != ''){
      this.api.filtrar(val).subscribe((livros: any) => {
        this.livros = livros.items;
     })
    }else{
      this.livros = [];
    }
  }

  abrirLivro(id: string){

  }
  }



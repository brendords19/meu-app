import { LivrosLidosProvider } from './../../providers/livros-lidos/livros-lidos';
import { LivrosNaoLidosProvider } from './../../providers/livros-nao-lidos/livros-nao-lidos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../modules/livro';

@IonicPage()
@Component({
  selector: 'page-meus-livros',
  templateUrl: 'meus-livros.html',
})
export class MeusLivrosPage {
    livrosLendo: Livro[] = [];
    livrosQueJaLi: Livro[] = [];
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
    private LivrosNaoLidosProvider: LivrosNaoLidosProvider, private LivrosLidosProvider: LivrosLidosProvider) {
  }

  ionViewDidEnter(){
   this.LivrosNaoLidosProvider.recuperarTodos().then((livros: Livro[]) => {
     this.livrosLendo = livros || [];
   });

   this.LivrosLidosProvider.recuperarTodos().then((livros: Livro[]) => {
     this.livrosQueJaLi = livros || [];
   })
  }
 

  abrirLivro(id: string, lido: boolean) {
    this.navCtrl.push('DetalhesPage', { livroId: id, lido: lido, favorito: true});
  }
  
}

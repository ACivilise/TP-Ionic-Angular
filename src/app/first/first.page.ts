import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AnimationBuilder } from "css-animator";

@Component({
  selector: 'app-first',
  templateUrl: 'first.page.html'
})
export class FirstPage {
  private title: string;
  private param: any;
  private ChangeTitleCallback: () => {};
  constructor(public navCtrl: NavController) {
    // bind(this) permet de garder le context dans la méthode
    this.ChangeTitleCallback = this.changeTitle.bind(this);
    this.title = "Titre de first page";
    // if (this.params.get("nomParam1") != undefined) {
    //   this.param = this.params.get("nomParam1");
    // }
  }
  private changeTitle() {
    this.title = "boom!";
    let titreElement: HTMLElement = document.getElementById('titleFirstPage');
    let animator = new AnimationBuilder();
    animator
      .animate(titreElement)
      .catch((reason: any) => {
        console.log(reason)
      });
  }
}






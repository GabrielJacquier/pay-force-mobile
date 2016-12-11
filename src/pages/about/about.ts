import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public alertCtrl: AlertController) { }

  openPopup() {
    let popup = this.alertCtrl.create({
      title: "Test",
      message: "Message test",
      inputs: [
        {
          name: "codigo",
          placeholder: "Digite seu código"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Salvar",
          handler: data => {
            console.log('fooi');
          }
        }
      ]
    });
    
    popup.present();
  }
}

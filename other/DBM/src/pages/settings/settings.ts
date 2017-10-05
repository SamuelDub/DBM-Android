import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-list',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  token: string = "";
  bot: any;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  setToken() {
    this.storage.ready().then(() => {
            this.storage.set('botKey', this.token);
            this.navCtrl.push(HomePage);
    });
    
  }





}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, MenuController, ActionSheetController, PopoverController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { SelectionsPage } from '../selections/selections'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public menu: MenuController, public popoverCtrl: PopoverController, public storage: Storage) {

    this.menu.enable(false, 'leftMenu');

    storage.ready().then(() => {
      storage.get('botKey').then((val) => {
        if (val == null) {
          navCtrl.push(SettingsPage);
        } else {
          console.log(val)
        }
      })
    });
  

  }

  // goToOtherPage() {
  //   this.navCtrl.push(SettingsPage);
  // }

  presentPopover() {
    let popover = this.popoverCtrl.create(SelectionsPage);
    popover.present();
  }

  // presentActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Change Your Bot Key?',
  //     buttons: [
  //     {
  //         text: 'Confirm',
  //         handler: () => {
  //           console.log('Confirm clicked');
  //           this.navCtrl.push(SettingsPage);
  //         }
  //       },{
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }

}
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, MenuController, ActionSheetController, PopoverController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { SelectionsPage } from '../selections/selections'
import * as Discord from 'discord.js';

const bot = new Discord.Client();

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
          bot.login(val).then(function() {
            console.log(val);
            console.log("Logged In");
          });
        }
      })
    });

    bot.on('message', async (message: Discord.Message) => {
      let reaction: Discord.MessageReaction = await message.react('💰');
      let reactionUsers = await reaction.fetchUsers();
      // Filter the user with the name 'MarketBot' (this bot) from the list of users
      let me: Discord.User = reactionUsers.filter(_ => _.username === 'MarketBot')[0];
      console.log(me);
      await reaction.remove(me).catch(error => console.error(error));
  });

  }

  // goToOtherPage() {
  //   this.navCtrl.push(SettingsPage);
  // }

  presentPopover() {
    let popover = this.popoverCtrl.create(SelectionsPage);
    popover.present();
  }
  
  removeToken() {
    this.navCtrl.push(SettingsPage);
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
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';

@IonicPage()
@Component({
  selector: 'page-nfc-menu',
  templateUrl: 'nfc-menu.html',
})
export class NfcMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NfcMenuPage');
  }

}

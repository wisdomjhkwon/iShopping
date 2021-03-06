import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { TagUtil, Tag } from './tag';
import { StorageUtils } from './storageutils';
import { SucPage } from '../suc/suc';

@IonicPage()
@Component({
  selector: 'page-nfc-menu',
  templateUrl: 'nfc-menu.html',
})
export class NfcMenuPage {
  dataReceived: boolean;
  showAnimation: boolean = false;
  tag: Tag;

  constructor(public nav: NavController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef) {
    this.dataReceived = false;
    this.tag = new Tag();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NfcMenuPage');
    this.addNfcListeners();
  }

  addNfcListeners(): void {
    this.nfc.addTagDiscoveredListener((tagEvent: Event) => this.tagListenerSuccess(tagEvent));
    this.nfc.addNdefListener((tagEvent: Event) => this.tagListenerSuccess(tagEvent));
  }

  tagListenerSuccess(tagEvent: Event) {
    console.log(tagEvent);
    this.vibrate(2000);
    this.nav.push(SucPage);
  }

  vibrate(time: number): void {
    if (navigator.vibrate) {
      navigator.vibrate(time);
    }
  }

  saveTag(): void {
    if (this.tag.id) {
      this.tag.key = btoa(this.tag.id[1]);

      if (!StorageUtils.hasTags()) {
        StorageUtils.setTags([]);
      }

      let tags: Array<any> = StorageUtils.getTags();
      tags = tags.filter((item) => item.key !== this.tag.key);

      this.tag.date = new Date().toISOString();
      tags.push(this.tag);

      StorageUtils.setTags(tags);
    }
  }

  scanNewTag(): void {
    this.dataReceived = false;
    this.showAnimation = false;
  }

  nextP(){
    this.nav.push(SucPage);
  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NfcMenuPage } from './nfc-menu';

@NgModule({
  declarations: [
    NfcMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(NfcMenuPage),
  ],
})
export class NfcMenuPageModule {}

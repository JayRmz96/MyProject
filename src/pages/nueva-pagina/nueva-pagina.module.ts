import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaPaginaPage } from './nueva-pagina';

@NgModule({
  declarations: [
    NuevaPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaPaginaPage),
  ],
})
export class NuevaPaginaPageModule {}

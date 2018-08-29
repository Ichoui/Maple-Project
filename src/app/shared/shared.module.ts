import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { KeyvaluePipe } from './pipes/keyvalue/keyvalue.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalComponent, KeyvaluePipe],
  exports: [ModalComponent, KeyvaluePipe]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        SharedModule
      ]
    };
  }
  }

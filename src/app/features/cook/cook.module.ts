import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookComponent } from './cook.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreludeComponent } from './prelude/prelude.component';
import { MiseEnPlaceComponent } from './mise-en-place/mise-en-place.component';

@NgModule({
  declarations: [CookComponent, PreludeComponent, MiseEnPlaceComponent],
  imports: [CommonModule, FontAwesomeModule, SharedModule],
})
export class CookModule {}

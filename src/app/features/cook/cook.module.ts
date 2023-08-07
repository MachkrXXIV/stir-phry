import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookComponent } from './cook.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { PreludeComponent } from './prelude/prelude.component';
import { MiseEnPlaceComponent } from './mise-en-place/mise-en-place.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CookComponent,
    PreludeComponent,
    MiseEnPlaceComponent,
    InstructionsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SharedModule,
    NgbProgressbarModule,
  ],
})
export class CookModule {}

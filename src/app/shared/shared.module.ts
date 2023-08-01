import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamelCaseSplitPipe } from './camel-case-split.pipe';

@NgModule({
  declarations: [CamelCaseSplitPipe],
  imports: [CommonModule],
  exports: [CamelCaseSplitPipe],
})
export class SharedModule {}

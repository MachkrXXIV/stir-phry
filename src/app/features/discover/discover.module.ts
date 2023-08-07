import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverComponent } from './discover.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { NavTabsComponent } from './detailed-view/nav-tabs/nav-tabs.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    DiscoverComponent,
    ExplorerComponent,
    DetailedViewComponent,
    NavTabsComponent,
  ],
  imports: [CommonModule, SharedModule, NgbAlertModule],
})
export class DiscoverModule {}

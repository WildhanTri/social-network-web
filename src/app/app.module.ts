import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GridComponent } from './component/grid/grid.component';
import { GridAddComponent } from './component/grid-add/grid-add.component';
import { ActivityComponent } from './component/activity/activity.component';
import { ChannelComponent } from './component/channel/channel.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    GridComponent,
    GridAddComponent,
    ActivityComponent,
    ChannelComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

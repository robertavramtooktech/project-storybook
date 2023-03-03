
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskModule } from './components/task.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

 import { InboxScreenWrapperComponent } from './components/inbox-screen-wrapper/inbox-screen-wrapper.component';
 import { InboxScreenComponent } from './components/inbox-screen/inbox-screen.component';

@NgModule({
 declarations: [AppComponent, InboxScreenComponent, InboxScreenWrapperComponent],
  imports: [
    BrowserModule,
    TaskModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: environment.production, }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
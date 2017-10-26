import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NanguaComponent } from './nangua/nangua.component'
import { FirstComponent} from './first/first.component'
import { ScaleDirective } from './nangua/nanguachange.serve'


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NanguaComponent,
    ScaleDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: FirstComponent
      },
      {
        path: 'nangua',
        component: NanguaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

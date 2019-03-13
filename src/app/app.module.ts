import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HeaderModule } from '@shared/header/header.module';
import { HeaderService } from '@shared/services/header.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/service/auth.service';
import { SpinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { CoreModule } from './core/core.module';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HeaderModule,
    CoreModule,
    MatProgressSpinnerModule
  ],
  providers: [
    HeaderService, 
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Libraries
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// App
import { AppRoutingModule, MaterialModule } from './module';
import { AppComponent } from './app.component';

// Translate
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,/* First */
    HttpClientModule,
    MaterialModule,
    TranslateModule.forRoot({defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
    AppRoutingModule/* Last */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

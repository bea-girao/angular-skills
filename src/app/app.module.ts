import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatToolbar, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { CardService } from './dashboard/card/card.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './fake-api.service';
import { HelloComponent } from './hello.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [BrowserModule, FormsModule, MatToolbarModule, MatIconModule, BrowserAnimationsModule, MatProgressSpinnerModule, MatButtonModule, MatChipsModule, MatCardModule, HttpClientModule, InMemoryWebApiModule.forRoot(FakeApiService, { delay: 5000 }), FlexLayoutModule],
  declarations: [AppComponent, HelloComponent, DashboardComponent, CardComponent],
  bootstrap: [AppComponent],
  providers: [CardService]
})
export class AppModule { }

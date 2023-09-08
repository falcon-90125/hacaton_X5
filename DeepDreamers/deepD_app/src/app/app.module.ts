import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './widgets/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './widgets/content/content.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyServiceService } from './service/my-service.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

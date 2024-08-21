import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { SkillsComponent } from './home/skills/skills.component';
import { WorkComponent } from './home/work/work.component';
// import { TestemonialsComponent } from './home/testemonials/testemonials.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { FirstHeaderComponent } from './contact/first-header/first-header.component';
import { SkillDetailsComponent } from './home/skill-details/skill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    // TestemonialsComponent,
    TestimonialsComponent,
    FooterComponent,
    ContactComponent,
    FirstHeaderComponent,
    SkillDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { AppComponent } from './app.component';
import { GlobalnavComponent } from './globalnav/globalnav.component';
import { WorkshopdetailComponent } from './workshopdetail/workshopdetail.component';
import { LinkitemComponent } from './linkitem/linkitem.component';
import { LinkitemlistComponent } from './linkitemlist/linkitemlist.component';
import { TeamitemComponent } from './teamitem/teamitem.component';
import { ITeamitemlist } from './teamitemlist/teamitemlist.interface';
import { TeamitemlistComponent } from './teamitemlist/teamitemlist.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SocialComponent } from './social/social.component';
import { AskComponent } from './ask/ask.component';
import { NominateComponent } from './nominate/nominate.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { NomineeComponent } from './nominee/nominee.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    GlobalnavComponent,
    WorkshopdetailComponent,
    LinkitemComponent,
    LinkitemlistComponent,
    TeamitemComponent,
    TeamitemlistComponent,
    // ITeamitemlist,
    AppfooterComponent,
    AppheaderComponent,
    ScheduleComponent,
    SocialComponent,
    AskComponent,
    NominateComponent,
    HomeComponent,
    QuestionComponent,
    NomineeComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BootstrapModalModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'social',
        component: SocialComponent
      },
      {
        path: 'ask',
        component: AskComponent
      },
      {
        path: 'nominate',
        component: NominateComponent
      }
    ])
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

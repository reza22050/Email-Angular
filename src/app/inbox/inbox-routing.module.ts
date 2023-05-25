import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { PlaceHolderComponent } from './place-holder/place-holder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailResolver } from '../_resolvers/email.resolver';

const routes: Routes = [
  {path:'', component: InboxHomeComponent, children: [
    {path: '', component: PlaceHolderComponent }, 
    {path: ':id', component: EmailShowComponent, resolve: {email: EmailResolver} }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }

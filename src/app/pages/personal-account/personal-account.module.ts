import { NgModule } from '@angular/core';
import { PersonalAccountPageComponent } from './personal-account.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PersonalAccountPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class PersonalAccountModule {}

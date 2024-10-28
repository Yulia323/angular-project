import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from './contacts.component';

const routes: Routes = [{ path: '', component: ContactsPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ContactsModule {}

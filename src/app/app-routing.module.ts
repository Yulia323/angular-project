import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {AboutComponent} from './components/about/about.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {BasketComponent} from "./components/basket/basket.component";
import {PersonalAccountComponent} from "./components/personal-account/personal-account.component";
import {MainPageComponent} from "./components/main-page/main-page.component";

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'personal-account', component: PersonalAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule) },
  { path: 'catalog', loadChildren: () => import('./pages/catalog/catalog.module').then((m) => m.CatalogModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule) },
  { path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then((m) => m.ContactsModule) },
  { path: 'basket', loadChildren: () => import('./pages/basket/basket.module').then((m) => m.BasketModule) },
  {
    path: 'personal-account',
    loadChildren: () => import('./pages/personal-account/personal-account.module').then((m) => m.PersonalAccountModule)
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

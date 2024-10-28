import { NgModule } from '@angular/core';
import { CatalogPageComponent } from './catalog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CatalogPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class CatalogModule {}

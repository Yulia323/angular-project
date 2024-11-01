import { NgModule } from '@angular/core';
import { BasketPageComponent } from './basket.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BasketPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class BasketModule {}

import { NgModule } from '@angular/core';
import { AboutPageComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class AboutModule {}

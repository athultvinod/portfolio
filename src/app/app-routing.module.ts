import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
{path : "",component : MainComponent},
{path:"aboutus", component :AboutusComponent },
{path:"services",component:ServicesComponent},
{path:"contactus",component:ContactusComponent},
{path:"skills",component:SkillComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

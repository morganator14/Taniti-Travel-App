import { Routes } from '@angular/router';
import { Food } from './food/food';
import { Lodging } from './lodging/lodging';
import { Transport } from './transport/transport';
import { Activities } from './activities/activities';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'', redirectTo:'Home', pathMatch:'full'},
    {path:'food',component:Food},
    {path:'lodging', component:Lodging},
    {path:'transport',component:Transport},
    {path:'activities', component:Activities},
    {path:'home', component:Home}

];

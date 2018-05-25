import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {PricelistComponent} from './pricelist/pricelist.component';

export const router: Routes=[
    {path:'', redirectTo:'pricelist', pathMatch:'full'},
    {path:'pricelist', component: PricelistComponent}

]
export const routes: ModuleWithProviders= RouterModule.forRoot(router);
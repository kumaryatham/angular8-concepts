import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { RecipeHomeComponent } from './recipe-home/recipe-home.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
    {
        path:'',
        redirectTo:'shop',
        pathMatch:'full'
    },
    {
        path: 'samples',
        component: CompOneComponent
    },
    {
        path: 'comp2',
        component: CompTwoComponent
    },
    {
        path:'shop',
        component: RecipeHomeComponent,
        data : {
            loadFeature : 'shopping-list'
        }
    },
    {
        path:'recipe',
        component: RecipeHomeComponent,
        data : {
            loadFeature : 'recipe'
        },
        children : [
            {
                path:'',
                component : RecipeStartComponent
            },
            {
                path:':id',
                component : RecipeDetailComponent
            },
            {
                path: 'new',
                component : RecipeEditComponent
            },
            {
                path: ':id/edit',
                component : RecipeEditComponent
            }
        ]
    },
    {
        path :'viewEncapsulation',
        component:ViewEncapsulationComponent
    },
    {
        path : '**',
        component : PageNotFoundComponent,
        // Sending static data from route
        data : {message : 'Page Not found message from Router config!'}
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsResolver } from './resolvers/product-details.resolver';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [{
            path: ':category',
            component: ProductsListComponent,            
        },
        {
            path: ':category/:productId',
            component: ProductDetailsComponent,
            resolve: {
                detailsData: ProductDetailsResolver
            }
        },
        {
            path: '',
            redirectTo: 'all'
        }
        ]
    },
    {
        path: '**', redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProductDetailsResolver]
})
export class ProductsRoutingModule { }
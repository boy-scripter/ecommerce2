import { Routes } from '@angular/router';
import HomePage from '@pages/home/home.page';
import { IndexLayout } from '@layouts/index/index.layout';
import singleProductPage from '@pages/singleProduct/singleProduct.page';

export const routes: Routes = [
    {
        path: '',
        component: IndexLayout,
        children: [
            {
                path: 'home',
                component: HomePage
            }
        ]
    },

];

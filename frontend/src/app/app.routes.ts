import { Routes } from '@angular/router';
import HomePage from '@pages/home/home.page';
import singleProductPage from '@pages/singleProduct/singleProduct.page';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => HomePage,
    },
    {
        path: 'single-product/:id',
        loadComponent: () => singleProductPage
    }
];

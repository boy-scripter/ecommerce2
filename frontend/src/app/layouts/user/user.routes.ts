import { Route } from '@angular/router'

export const userRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@pages/singleProduct/singleProduct.page').then(c => c.singleProductPage)
    }
]
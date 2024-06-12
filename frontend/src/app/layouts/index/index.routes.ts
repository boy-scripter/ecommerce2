import { Route } from "@angular/router"

export const indexRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('@pages/home/home.page').then(c => c.HomePage)
    }
]
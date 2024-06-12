import { Route } from '@angular/router';
import { IndexLayout } from '@layouts/index/index.layout';
import { UserLayout } from '@layouts/user/user.layout';

export const routes: Route[] = [
    {
        path: '',
        component: IndexLayout,
        loadChildren: () => import('@layouts/index/index.routes').then(c => c.indexRoutes)
    },
    {
        path: 'user',
        component: UserLayout,
        loadChildren: () => import('@layouts/user/user.routes').then(c => c.userRoutes)
    },

];

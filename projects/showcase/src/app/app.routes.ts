import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'showcase',
        loadComponent: () => import('../components/showcase/showcase.component').then(m => m.ShowcaseComponent)
    },
    {
        path: 'getting-started',
        loadComponent: () => import('../components/getting-started-page/getting-started-page.component').then(m => m.GettingStartedPageComponent)
    },
    {
        path: '**',
        redirectTo: 'showcase'
    },
];

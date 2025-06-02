import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'showcase',
        loadComponent: () => import('../components/showcase/showcase.component').then(m => m.ShowcaseComponent)
    },
    {
        path: '**',
        redirectTo: 'showcase'
    },
];

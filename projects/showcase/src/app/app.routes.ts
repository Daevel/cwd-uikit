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
        path: 'guides',
        loadComponent: () => import('../components/guides/guides.component').then(m => m.GuidesComponent)
    },
    {
        path: 'components',
        loadComponent: () => import('../components/components/components.component').then(m => m.ComponentsComponent)
    },
    {
        path: '**',
        redirectTo: 'showcase'
    },
];

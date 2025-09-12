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
        path: 'components/button',
        loadComponent: () => import('../components/components/button-introduction-page/button-introduction-page.component').then(m => m.ButtonIntroductionPageComponent)
    },
    {
        path: 'components/fab',
        loadComponent: () => import('../components/components/fab-introduction-page/fab-introduction-page.component').then(m => m.FabIntroductionPageComponent)
    },
    {
        path: 'components/card',
        loadComponent: () => import('../components/components/card-introduction-page/card-introduction-page.component').then(m => m.CardIntroductionPageComponent)
    },
    {
        path: 'components/checkbox',
        loadComponent: () => import('../components/components/checkbox-introduction-page/checkbox-introduction-page.component').then(m => m.CheckboxIntroductionPageComponent)
    },
    {
        path: 'components/loader',
        loadComponent: () => import('../components/components/loader-introduction-page/loader-introduction-page.component').then(m => m.LoaderIntroductionPageComponent)
    },
    {
        path: 'components/tooltip',
        loadComponent: () => import('../components/components/tooltip-introduction-page/tooltip-introduction-page.component').then(m => m.TooltipIntroductionPageComponent)
    },
    {
        path: 'components/modal',
        loadComponent: () => import('../components/components/modal-introduction-page/modal-introduction-page.component').then(m => m.ModalIntroductionPageComponent)
    },
    {
        path: 'components/slide-toggle',
        loadComponent: () => import('../components/components/slide-toggle-introduction-page/slide-toggle-introduction-page.component').then(m => m.SlideToggleIndtroductionPageComponent)
    },
    {
        path: 'components/input',
        loadComponent: () => import('../components/components/input-introduction-page/input-introduction-page.component').then(m => m.InputIntroductionPageComponent)
    },
    {
        path: '**',
        redirectTo: 'showcase'
    },
];

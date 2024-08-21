import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'folder',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.page').then((m) => m.DashboardPage)
      },
      {
        path: 'personal-data',
        loadComponent: () => import('./personal-data/personal-data.page').then((m) => m.PersonalDataPage)
      },
      {
        path: 'contracts',
        loadComponent: () => import('./contracts/contracts.page').then((m) => m.ContractsPage)
      },
      {
        path: 'offers',
        loadComponent: () => import('./offers/offers.page').then((m) => m.OffersPage)
      },
      {
        path: 'documents',
        loadComponent: () => import('./documents/documents.page').then((m) => m.DocumentsPage)
      },
      {
        path: 'activation',
        loadComponent: () => import('./activation/activation.page').then((m) => m.ActivationPage)
      }
    ]
  },
  
];

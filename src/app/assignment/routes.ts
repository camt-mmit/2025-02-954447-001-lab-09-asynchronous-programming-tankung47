import { Routes } from '@angular/router';
import { DynamicSectionFormPage } from './pages/dynamic-section-form-page/dynamic-section-form-page';
import { AssignmentRoot } from './pages/assignment-root/assignment-root';
import { DynamicSectionViewPage } from './pages/dynamic-section-view-page/dynamic-section-view-page';

export default [
  {
    path: '',
    component: AssignmentRoot,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },

      { path: 'form', component: DynamicSectionFormPage },
      { path: 'view', component: DynamicSectionViewPage },
    ],
  },
] as Routes;

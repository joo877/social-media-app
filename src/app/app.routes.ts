import { Routes } from '@angular/router';
import { SignUpComponent } from './features/auth/sign-up/sign-up.component';
import { SignInComponent } from './features/auth/sign-in/sign-in.component';
import { TimelineComponent } from './features/timeline/timeline.component';
import { DetailsPostComponent } from './features/details-post/details-post.component';
import { ProfileComponent } from './features/profile/profile.component';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { ChangePasswordComponent } from './features/auth/change-password/change-password.component';
import { BlankLayoutComponent } from './core/layout/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signup', component: SignUpComponent, title: 'signup page' },
      { path: 'signin', component: SignInComponent, title: 'signin page' },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'timeline',
        component: TimelineComponent,
        title: 'timeline',
      },
      { path: 'details', component: DetailsPostComponent },
      { path: 'profil', component: ProfileComponent, title: 'profil' },
      {
        path: 'changepassword',
        component: ChangePasswordComponent,
        title: 'changepassword page',
      },
    ],
  },
  { path: '**', component: NotfoundComponent, title: 'not found page' },
];

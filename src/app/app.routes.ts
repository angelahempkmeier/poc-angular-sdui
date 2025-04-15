import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
         title: 'StudyHub - Home'
    },
    { 
        path: 'about', 
        component: AboutComponent,
        title: 'About'
    }
];

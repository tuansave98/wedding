import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { IndexTwoComponent } from './pages/index-two/index-two.component';
import { IndexThreeComponent } from './pages/index-three/index-three.component';
import { IndexFourComponent } from './pages/index-four/index-four.component';
import { IndexFiveComponent } from './pages/index-five/index-five.component';
import { IndexSixComponent } from './pages/index-six/index-six.component';
import { IndexSevenComponent } from './pages/index-seven/index-seven.component';
import { IndexEightComponent } from './pages/index-eight/index-eight.component';
import { IndexNineComponent } from './pages/index-nine/index-nine.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { PortofolioDetailComponent } from './pages/portfolio-detail/portfolio-detail.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ResetPasswordComponent } from './pages/auth/reset-password/reset-password.component';

export const routes: Routes = [
    {path:'', component:IndexComponent},
    {path:'index-two', component:IndexTwoComponent},
    {path:'index-three', component:IndexThreeComponent},
    {path:'index-four', component:IndexFourComponent},
    {path:'index-five', component:IndexFiveComponent},
    {path:'index-six', component:IndexSixComponent},
    {path:'index-seven', component:IndexSevenComponent},
    {path:'index-eight', component:IndexEightComponent},
    {path:'index-nine', component:IndexNineComponent},
    {path:'blog-detail', component:BlogDetailComponent},
    {path:'portfolio-detail', component:PortofolioDetailComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'reset-password', component:ResetPasswordComponent},
];


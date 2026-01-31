import { Routes } from '@angular/router';
import { MemberList } from '../Features/members/member-list/member-list';
import { Home } from '../Features/home/home';
import { MemberDetails } from '../Features/members/member-details/member-details';
import { Messages } from '../Features/messages/messages';
import { Lists } from '../Features/lists/lists';
import { authGuard } from '../Core/guard/auth-guard';
import { ErrorTest } from '../Features/error-test/error-test';
import { NotFound } from '../Shared/not-found/not-found';
import { MemberProfile } from '../Features/members/member-profile/member-profile';
import { MemberPhoto } from '../Features/members/member-photo/member-photo';
import { memberResolver } from '../Features/members/member-resolver';
  
export const routes: Routes = [
    { path: '', component: Home },
    {
        path: '',
        runGuardsAndResolvers: "always",
        canActivate: [authGuard],
        children: [
            { path: 'members', component: MemberList },
            { path: 'members/:id', 
                resolve:{member:memberResolver},
                runGuardsAndResolvers:'always',
                
                component: MemberDetails
                , children:[

                    {
                        path:'',redirectTo:'profile',pathMatch:'full'
                    },
                    {
                        path:'profile',component:MemberProfile,title:'profile'
                    },
                    {
                        path:'Photos',component:MemberPhoto,title:'Photos'
                    },
                    {
                        path:'Messages',component:Messages,title:'Messages'
                    }
                ]
             },
            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },

        ]
    },
    { path: 'error', component: ErrorTest },
    { path: '**', component: NotFound }

];

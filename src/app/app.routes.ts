import { Routes } from '@angular/router';
import { MemberList } from '../Features/members/member-list/member-list';
import { Home } from '../Features/home/home';
import { MemberDetails } from '../Features/members/member-details/member-details';
import { Messages } from '../Features/messages/messages';
import { Lists } from '../Features/lists/lists';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'members', component: MemberList },
    { path: 'members/:id', component: MemberDetails },
        { path: 'lists', component: Lists },

    { path: 'messages', component: Messages },
        { path: '**', component: Home }



];

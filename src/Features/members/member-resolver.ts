import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { MemberService } from '../../Core/service/member-service';
import { routes } from '../../app/app.routes';
import { EMPTY } from 'rxjs';
import { Member } from '../../types/Member';

export const memberResolver: ResolveFn<Member> = (route, state) => {
  const memberservice=inject(MemberService);
  const router=inject(Router)
const memberId=route.paramMap.get('id')
if(!memberId)
{
  router.navigateByUrl('/not-found')
  return EMPTY;
}
return memberservice.getMember(memberId);
   

};

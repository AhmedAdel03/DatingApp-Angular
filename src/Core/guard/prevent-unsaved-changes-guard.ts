import { CanDeactivateFn } from '@angular/router';
import { MemberProfile } from '../../Features/members/member-profile/member-profile';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberProfile> = (component, currentRoute, currentState, nextState) => {
  if(component.editform?.dirty)
  {
    return confirm("Are you sure you want to leave , All your progress will be lost")
  }
  return true;
};

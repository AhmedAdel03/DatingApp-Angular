import { HttpClient    } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { EditableMember, Member, Photo } from '../../types/Member';
import { tap } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})
export class MemberService { 
  private http=inject(HttpClient);
    member=signal<Member| null>(null);
   private baseUrl=environment.url;
   editmode=signal(false);


  fetchMembers() {
  return this.http.get<Member[]>(this.baseUrl + 'Member' );
}

// Use Auth
getMember(id: string) {
  return this.http.get<Member>(this.baseUrl + 'Member/' + id ).pipe(
    tap(member=>{
      this.member.set(member);
    })
  )
}
getPhoto(id:string)
{
  return this.http.get<Photo[]>(this.baseUrl+'Member/' + id+ '/photo' )
}
UpdateMember(member:EditableMember)
{
  return this.http.patch(this.baseUrl+'Member',member);


}
   
  
}

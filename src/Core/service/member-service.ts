import { HttpClient    } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member, Photo } from '../../types/Member';
  
@Injectable({
  providedIn: 'root'
})
export class MemberService { 
  private http=inject(HttpClient);
 
  private baseUrl=environment.url;

  fetchMembers() {
  return this.http.get<Member[]>(this.baseUrl + 'Member' );
}

getMember(id: string) {
  return this.http.get<Member>(this.baseUrl + 'Member/' + id );
}
getPhoto(id:string)
{
  return this.http.get<Photo[]>(this.baseUrl+'Member/' + id+ '/photo' )
}
   
  
}

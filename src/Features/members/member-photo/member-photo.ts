import { Component, inject } from '@angular/core';
import { MemberService } from '../../../Core/service/member-service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../../../types/Member';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-photo',
  imports: [AsyncPipe],
  templateUrl: './member-photo.html',
  styleUrl: './member-photo.css'
})
export class MemberPhoto {
  private memberservice=inject(MemberService);
  private route=inject(ActivatedRoute);
protected photo$?:Observable<Photo[]>;
 
constructor() {
   const memberId=this.route.parent?.snapshot.paramMap.get('id');
   if(memberId)
   {
    this.photo$=this.memberservice.getPhoto(memberId);
   }
}
}

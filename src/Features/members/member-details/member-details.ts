import { Component, inject, OnInit, signal } from '@angular/core';
import { MemberService } from '../../../Core/service/member-service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Observable } from 'rxjs';
import { Member } from '../../../types/Member';
import { AsyncPipe } from '@angular/common';
import { AgePipe } from '../../../Core/pipes/age-pipe';

@Component({
  selector: 'app-member-details',
  imports: [ RouterLink, RouterLinkActive,RouterOutlet,AgePipe],
  templateUrl: './member-details.html',
  styleUrl: './member-details.css'
})
export class MemberDetails implements OnInit {
   private memberservice=inject(MemberService);
  private route=inject(ActivatedRoute)
  protected router=inject(Router);
  protected title=signal<string|undefined>('Profile');
protected member=signal<Member | undefined>(undefined);
 
 
  ngOnInit(): void {
     this.route.data.subscribe({
      next:data=>this.member.set(data['member'])
     })
     this.title.set(this.route.snapshot.firstChild?.title);
     this.router.events.pipe(
      filter(event=>event instanceof NavigationEnd)
     ).subscribe({
      next:()=>{
        this.title.set(this.route.snapshot.firstChild?.title);
      }
     })
  }
}

import { Component, inject, OnDestroy, OnInit, signal, ViewChild     } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditableMember, Member } from '../../../types/Member';
import { DatePipe } from '@angular/common';
import { MemberService } from '../../../Core/service/member-service';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { ServiceAccount } from '../../../Core/service/service-account';

@Component({
  selector: 'app-member-profile',
  imports: [DatePipe, ɵInternalFormsSharedModule,FormsModule],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile implements OnInit,OnDestroy {

  @ViewChild('Editform') editform?:NgForm
  protected memberservice=inject(MemberService)
  protected AccountService=inject(ServiceAccount)
  protected EditableMember:EditableMember={
    displayname: '',
    city: '',
    country: '',
    description:''
  }
 protected toast=inject(ToastrService)
 
  
     ngOnDestroy(): void {
  if(this.memberservice.editmode()){
    this.memberservice.editmode.set(false)
  }
  
    }
 ngOnInit(): void {
  
    this.EditableMember={
      displayname:this.memberservice.member()?.displayName || '',
      city:this.memberservice.member()?.city|| '',
      country:this.memberservice.member()?.country || '',
            description:this.memberservice.member()?.description || '',


    }
  }
  UpdateProfile()
  {
    if(!this.memberservice.member()) return;
    const updatedMember={...this.memberservice.member(),...this.EditableMember}
      this.memberservice.UpdateMember(this.EditableMember).subscribe({
        next:()=>{
          var CurrentUser=this.AccountService.CurrentUser()
          if(CurrentUser&& CurrentUser.name!=this.memberservice.member()?.displayName)
          {
          CurrentUser.name=updatedMember.displayname;
                     localStorage.setItem('user',JSON.stringify(CurrentUser));

           }
          
     this.toast.success('Profile Updated')
     this.memberservice.member.set(updatedMember as Member);
      this.memberservice.editmode.set(false);
      this.editform?.reset(updatedMember)
        }
      })
    
  }

}

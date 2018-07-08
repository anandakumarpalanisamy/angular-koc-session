import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../user.service';
import { Profile } from '../domain/Profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Component({
   selector: 'app-profile-form',
   templateUrl: './profile-form.component.html',
   styleUrls: ['./profile-form.component.css'],
   providers: [
     UserService
   ]
})
export class ProfileComponent implements OnInit {

  isValidFormSubmitted = false;
	allProfiles: Profile[];
	allTechnologies: Technology[];
	user = new User();

  constructor(private userService: UserService) { }

	ngOnInit(): void {
    this.allProfiles = this.userService.getPofiles();
    this.allTechnologies = this.userService.getTechnologies();
  }

	onFormSubmit(form: NgForm) {
	  this.isValidFormSubmitted = false;
	  if(form.valid){
	    this.isValidFormSubmitted = true;
	  } else {
	    return;
    }
	  let userName = form.controls['name'].value;
	  let userProfile: Profile = form.controls['profile'].value;
	  let userTechnologies: Technology[] = form.controls['selectedTechs'].value;

	  let newUser = new User();
	  newUser.userName = userName;
	  newUser.profile = userProfile;
	  newUser.technologies = userTechnologies;

	  this.userService.createUser(newUser);

	  this.resetForm(form);
  }

	resetForm(form: NgForm) {
	  form.resetForm();
	  this.user.profile = null;
	  this.user.userName = '';
  }

	onProfileChange() {
	   console.log('Profile Changed: '+ this.user.profile.prName);
	}

  compareTech(t1: Technology, t2: Technology): boolean {
	  console.log(t1.techId +'-' + t2.techId);
          return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
  }
}

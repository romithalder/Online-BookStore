import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pass:string="";
  cpass:string="";
  msg:string="The password should match";
  constructor() { }

  ngOnInit(): void {
  }
  check() {
    if(this.pass == this.cpass) {
      this.msg="you can register successfully";
    }
    else {
      this.msg="passwords are not matching";
    }
  }

}

import { AccountService } from './../account.service';
import { Router } from '@angular/router';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements DoCheck {

  isLogged = false;

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngDoCheck() {
    this.isLogged = this.accountService.isLoggedIn();
  }

  logOut() {
    this.accountService.logOut();
    this.router.navigate(['account']);
  }

}

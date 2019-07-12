import { Component } from '@angular/core';
import { store } from '../../_auth/current-user';
import { OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { AuthenticationService } from '../../_auth/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: User;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
      this.authenticationService.getUser().subscribe(user => this.user = user, err => this.user = null);
      store.currentUser$.subscribe(user => this.user = user);
  }
}

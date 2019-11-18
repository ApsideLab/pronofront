import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../auth/token-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService,
              private token: TokenStorageService) { }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

  isAuth(): boolean {
    if (sessionStorage.getItem('AuthToken') == null) {
      return false;
    }
    return true;
  }
}

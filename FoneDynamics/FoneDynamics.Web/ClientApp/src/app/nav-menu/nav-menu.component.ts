import { Component } from '@angular/core';
import { TokenStorageService } from '../services/tokenStorageService';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isExpanded = !this.isExpanded;
    }
    else {
      this.isExpanded = false;
    }
  }

  


  onLogout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }


}

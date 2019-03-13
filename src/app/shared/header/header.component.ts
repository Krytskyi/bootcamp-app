import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'boot-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  menuItems: any;

  @Input()
  isLoggedIn: boolean = true;

  dropdownItems: any[] = [];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  selectItem(item): void {
    if (item.subItems && item.subItems.length) {
      this.dropdownItems = item.subItems;
      return;
    }
    this.router.navigate([item.alias]);
  }

  goToAuth(): void {
    this.router.navigate(['auth']);
  }

  logout(): void {
    this.authService.setIsLoggedIn(false);
    sessionStorage.clear();
    this.goToAuth();
  }
}

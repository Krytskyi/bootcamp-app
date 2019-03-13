import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { HeaderService } from '@shared/services/header.service';
import { AuthService } from './auth/service/auth.service';
import { Subscription } from 'rxjs';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  headerItems: any[];
  isLoggedIn: boolean;

  isLoggedIn$: Subscription;
  showSpinner: boolean;
  constructor(
    private headerService: HeaderService,
    private authServie: AuthService,
    private spinnerService: SpinnerService,
  ) { }

  ngOnInit() {
    this.authServie.initUser();
    this.headerService.getMenuItems().subscribe((data) => {
      this.headerItems = data;
    });

    this.spinnerService.showSpinner.subscribe((value) => {
      this.showSpinner = value
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoggedIn$ = this.authServie.isLoggenIn.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      })
    })
  }

  ngOnDestroy(): void {
    this.isLoggedIn$.unsubscribe();
  }
}

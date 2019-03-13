import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { delay, map } from "rxjs/operators";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(public spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.handleRequestStart();

        return next.handle(request).pipe(
            delay(600),
            map(resp => {
                this.spinnerService.handleRequestEnd();
                return resp;
            })
        );
    }
}
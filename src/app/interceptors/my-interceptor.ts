import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { AuthService } from '../auth-service/auth-service.service';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.getToken();
        const authReq = req.clone({
           headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(authReq);
    }
 
}
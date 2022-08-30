import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes: Router) { }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean
  {
    if (localStorage.getItem('accessToken') != null) 
    {
      return true;
    } 
    else 
    {
      this.routes.navigate(['/authentication/login']);
      return false;
    }
  }
  
}

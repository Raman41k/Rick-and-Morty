import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';


import {IEpisode, IPaginatedData} from "../../interfaces";
import {MainService} from "../main.service";

@Injectable({
  providedIn: 'root'
})
export class MainResolver implements Resolve<IPaginatedData<IEpisode>> {
  constructor(private mainService:MainService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginatedData<IEpisode>> {
    const page = route.queryParams['page'];
    return this.mainService.getAll(page);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IPaginatedData} from "../interfaces";
import {urls} from "../configs";


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page = 1): Observable<IPaginatedData<IEpisode>> {
    return this.httpClient.get<IPaginatedData<IEpisode>>(urls.episodes, {params: {page}})
  }

  getEpisode(id: number): Observable<IPaginatedData<IEpisode>> {
    return this.httpClient.get<IPaginatedData<IEpisode>>(urls.epidose(id))
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, IEpisode, IPaginatedData} from "../interfaces";
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

  getEpisode(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(urls.epidose(id))
  }

  getByID(id:number): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(urls.getById(id))
  }
}

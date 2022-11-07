import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IEpisode} from "../../interfaces";
import {MainService} from "../../services";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  selectedEpisode:IEpisode;

  constructor(private mainService:MainService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.mainService.getEpisode(id).subscribe((value) => this.selectedEpisode = value)
    })
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ICharacter} from "../../interfaces";
import {MainService} from "../../services";


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.css']
})
export class CharactersDetailsComponent implements OnInit {
  @Input()
  urls: string;
  character: ICharacter;
  id: number;

  constructor(private mainService:MainService) {

  }

  ngOnInit(): void {
    this.mainService.getByID(this.takeId()).subscribe((value) => this.character = value)
  }

  takeId(): number {
    return this.id = +this.urls.substring(this.urls.lastIndexOf('/') + 1)
  }

}

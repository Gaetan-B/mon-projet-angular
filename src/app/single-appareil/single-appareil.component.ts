import { Component, OnInit } from '@angular/core';
import {AppareilService} from "../services/appareil.services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit{

  name?: string = 'Appareil';
  status?: string = 'Status';

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (this.status && this.name && id) {
      this.name = this?.appareilService?.getAppareilByID(+id)?.name;
      this.status = this?.appareilService?.getAppareilByID(+id)?.status;
      }
    else {
      console.log("error");
    }
    }
}

import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AppareilService} from "../services/appareil.services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent {

  defaultOnOff = 'éteint';

  constructor(private appareilService: AppareilService,
              private router: Router) {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }

}

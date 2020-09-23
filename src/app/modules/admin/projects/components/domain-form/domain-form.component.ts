import { Component, OnInit } from '@angular/core';
import { Domain} from '../../models/domain.model';


@Component({
  selector: 'app-domain-form',
  templateUrl: './domain-form.component.html',
  styleUrls: ['./domain-form.component.scss']
})
export class DomainFormComponent implements OnInit {
  displayedColumns: string[] = ['domain', 'allow'];

    domains: Domain[]  = [
      {id_domain: 0, domain: "", allow: true},
      {id_domain: 1, domain: "Localhost", allow: true},
      {id_domain: 1, domain: "web.com", allow: false}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

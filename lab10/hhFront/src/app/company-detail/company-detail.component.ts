import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ApiService} from "../album-service";
import {Company} from "../company";
import {Vacancy} from "../vacancy";
import {AsyncPipe, NgForOf} from "@angular/common";
import {BehaviorSubject, Observable} from "rxjs";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent  implements OnInit{

  company$:Company=new Company();
  vacancy_list$: Observable<Vacancy[]>=new Observable<Vacancy[]>()
  constructor(private route: ActivatedRoute, private ApiService: ApiService) {}

  ngOnInit(): void {
    const routePar = this.route.snapshot.paramMap;
    const companyIdRoute = Number(routePar.get('id'));

    this.ApiService.getCompany(companyIdRoute).subscribe(company_data => {
      this.company$=company_data;
    });
    this.vacancy_list$ = this.ApiService.getVacanciesByCompany(companyIdRoute);
  }

}

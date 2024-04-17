import {Component, OnInit} from '@angular/core';
import {Company} from "../company";
import {Observable} from "rxjs";
import {Vacancy} from "../vacancy";
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../album-service";

@Component({
  selector: 'app-vacancy-details',
  standalone: true,
  imports: [],
  templateUrl: './vacancy-details.component.html',
  styleUrl: './vacancy-details.component.css'
})
export class VacancyDetailsComponent implements OnInit{
  vacancy$:Vacancy=new Vacancy();
  company$: Company | null = null;
  constructor(private route: ActivatedRoute, protected ApiService: ApiService) {}

  ngOnInit(): void {
    const routePar = this.route.snapshot.paramMap;
    const vacancyIdRoute = Number(routePar.get('id'));

    this.ApiService.getVacancy(vacancyIdRoute).subscribe(vacancy_data => {
      this.vacancy$=vacancy_data;
    });
  }
}

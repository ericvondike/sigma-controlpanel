import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/** Imports Models */
import { Language } from '../../shared/models/language.model';

/** Imports services */
import { CommonToolsService } from '../../shared/services/common-tools.service';
import { LanguageService } from '../../shared/services/rest/language.service';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit, AfterViewInit {
  displayedLanguageColumns: string[] = ['code', 'name'];
  languageDataSource = new MatTableDataSource(this.retrieveAllLanguages());  

  action: string;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private commonToolsService: CommonToolsService,
    private languageService: LanguageService,
  ) { }

  ngOnInit(): void {
    this.commonToolsService.currentAddViewAction.subscribe(
      action => this.action = action
    )
  }

  ngAfterViewInit(): void {
    this.languageDataSource.sort = this.sort;
  }

  retrieveAllLanguages(): Language[] {
    return this.languageService.retrievAllLanguages();
  }

}

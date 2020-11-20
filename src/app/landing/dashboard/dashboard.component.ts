import { Component, OnInit } from '@angular/core';

import browser from 'browser-detect';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment as env } from '../../../environments/environment';

import {
  authLogin,
  authLogout,
  routeAnimations,
  LocalStorageService,
  selectIsAuthenticated,
  selectSettingsStickyHeader,
  selectSettingsLanguage,
  selectEffectiveTheme
} from '../../core/core.module';
import {
  actionSettingsChangeAnimationsPageDisabled,
  actionSettingsChangeLanguage
} from '../../core/settings/settings.actions';

/** Imports services */
import { CommonToolsService } from '../../shared/services/common-tools.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routeAnimations]
})
export class DashboardComponent implements OnInit {
  opened: boolean;
  isRouterLinkActivated: boolean;
  isSettingRouterLinkActivated: boolean;
  page = 'home';
  addViewAction: string;


  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../../../assets/logo.png').default;
  languages = ['en', 'de', 'sk', 'fr', 'es', 'pt-br', 'zh-cn', 'he'];
  navigation = [
    { link: 'home', label: 'sigma.menu.about' },
    { link: 'feature-list', label: 'sigma.menu.features' },
    { link: 'examples', label: 'sigma.menu.panel' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'sigma.menu.settings' }
  ];

  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private commonToolsService: CommonToolsService,
    private store: Store,
    private storageService: LocalStorageService
  ) { }


  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(browser().name);
  }

  ngOnInit(): void {
    this.storageService.testLocalStorage();
    if (DashboardComponent.isIEorEdgeOrSafari()) {
      this.store.dispatch(
        actionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }

    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
    this.stickyHeader$ = this.store.pipe(select(selectSettingsStickyHeader));
    this.language$ = this.store.pipe(select(selectSettingsLanguage));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onLoginClick() {
    this.store.dispatch(authLogin());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onLogoutClick() {
    this.store.dispatch(authLogout());
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onLanguageSelect({ value: language }) {
    this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }

  openClose(): void {
    this.opened = ! this.opened;
  }


  activateRouterLink(): void {
    this.isRouterLinkActivated = true;
  }

  activateSettingRouterLink(): void {
    this.isSettingRouterLinkActivated = true;
  }

  deactivateSettingRouterLink(): void{
    this.isSettingRouterLinkActivated = false;
  }

  chooseAction(addViewAction: string): void {
    this.addViewAction = addViewAction;
    this.commonToolsService.setAddViewAction(addViewAction);
  }
}

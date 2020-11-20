import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonToolsService {

  constructor() { }

  private addViewAction = new BehaviorSubject<string>(null);
  currentAddViewAction = this.addViewAction.asObservable();

  setAddViewAction(action: string): void {
    this.addViewAction.next(action);
  }

  getCurrentAddViewAction(): string {
    return this.addViewAction.getValue();
  }
}

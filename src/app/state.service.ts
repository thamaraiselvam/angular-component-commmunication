import { Injectable } from '@angular/core';

export interface InternalStateType {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public data = {
    username: 'username',
    email: 'email',
    tasks: 'tasks',
  };

  public state: InternalStateType = {};

  constructor() { }

  public get(prop?: any) {
    return this.state.hasOwnProperty(prop) ? this.state[prop] : null;
  }

  public remove(prop?: any) {

    if (this.state.hasOwnProperty(prop)) {
      delete this.state[prop];
    }
  }

  public set(prop: string, value: any) {
    return this.state[prop] = value;
  }

  public removeAll() {
    Object.keys(this.state).forEach(async (ele) => {
      this.remove(ele);
    });
  }
}

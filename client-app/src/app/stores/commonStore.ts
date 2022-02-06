import { makeAutoObservable, reaction } from 'mobx';
import { ServerError } from '../models/serverError';

export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = window.localStorage.getItem('jwt');
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    // reagiramo na promjenu varijable token
    // prvi parametar je funkcija na sto reagiramo, varijabla token
    // reaction will run only when token is after changed
    reaction(
      () => this.token,
      (token) => {
        if (token) {
          window.localStorage.setItem('jwt', token);
        } else {
          window.localStorage.removeItem('jwt');
        }
      }
    );
  }

  setServerError = (error: ServerError) => {
    this.error = error;
  };

  setToken = (token: string | null) => {
    //if (token) window.localStorage.setItem('jwt', token);
    this.token = token;
  };

  setAppLoaded = () => {
    this.appLoaded = true;
  };
}

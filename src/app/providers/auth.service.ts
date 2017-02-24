import {Router} from "@angular/router";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  private _loggedInUser: any;
  private _userLoggedIn: boolean;

  constructor(private http: Http,
              private router: Router) {
  }

  public getProfile() {
    let headers = new Headers({'Authorization': 'token ' + localStorage.getItem("access_token")}); // ... Set content type to JSON
    let options = new RequestOptions({headers: headers}); // Create a request option

    return this.http.get("https://api.github.com/user", options)
      .map((res: Response) => {
        this._loggedInUser = res.json();
        this._userLoggedIn = true;
        return this._loggedInUser;
      })
      .catch(this.handleError);
  }

  public logout() {
    this._userLoggedIn = false;
    localStorage.removeItem('access_token');
    return this.router.navigate(['/login']);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  ngOnInit() {
  }

  get loggedInUser(): any {
    return this._loggedInUser;
  }

  get userLoggedIn() {
    return this._userLoggedIn;
  }

}

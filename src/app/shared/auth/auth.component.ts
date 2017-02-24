import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {gatekeeperConfig} from "../../gatekeeper.config";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: Http) {
  }

  accessToken: any;

  public getToken(code) {
    this.accessToken = this.http.get(gatekeeperConfig.development.gatekeeper + '/authenticate/' + code)
      .map((res: Response) => {
        let json = res.json();
        if (json && json.token) {
          this.accessToken = json;
          localStorage.setItem("access_token", this.accessToken.token);
          return {"authenticated": true};
        } else {
          localStorage.removeItem("access_token");
          return {"authenticated": false};
        }
      })
      .catch(this.handleError); //...errors if any

    return this.accessToken;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: any) => {
        let code = param['code'];
        this.getToken(code).subscribe(() => {
          return this.router.navigate(['/home']);
        });
      })
  }

}

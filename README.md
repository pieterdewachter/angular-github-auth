# Angular GitHub Auth

The project is rewrite on [__Makerlog__](https://makerlog.org/posts/gatekeeper-for-authenticating-with-github)'s approach for using gatekeeper GitHub-authentication. Instead of plain __Javascript__ we use __Angular__.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3
 and [gatekeeper](https://github.com/prose/gatekeeper).

## Setup angular-cli

Follow the installation instructions on [angular-cli](https://github.com/angular/angular-cli). After the installation run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Setup your GitHub Application
1. Sign in into __GitHub__
2. Go to __settings__/__OAuth applications__ and __Register a new application__
3. Give your application a __name__ and fill in the __Homepage URL__ and __Authorization callback URL__ : ```http://localhost:4200/``` 
4. __Save__ (afterwards we will need the __Client ID__ and __Client Secret__ for our __gatekeeper__ setup)

## Setup Gatekeeper

1. Clone the repository into the __shared__ directory
```
git clone git@github.com:prose/gatekeeper.git
```
2. Install Dependencies
```
cd src/app/shared && npm install
```

3. Adjust `gatekeeper.config.ts`
```
{
 "oauth_client_id": "GITHUB_APPLICATION_CLIENT_ID",
 "oauth_client_secret": "GITHUB_APPLICATION_CLIENT_SECRET",
 "oauth_host": "github.com",
 "oauth_port": 443,
 "oauth_path": "/login/oauth/access_token",
 "oauth_method": "POST",
 "port": 9999
}
```

4. Add Gatekeeper to `.gitignore`

5. __Serve__
```
$ node server.js
```

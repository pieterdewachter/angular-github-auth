# Angular GitHub Auth

The project is a rewrite on [__Makerlog__](https://makerlog.org/posts/gatekeeper-for-authenticating-with-github)'s approach for using gatekeeper GitHub-authentication. Instead of plain __Javascript__ we use __Angular__.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3
 and [gatekeeper](https://github.com/prose/gatekeeper).

## Install npm packages to run angular-cli

1. Install 

  ```
  npm install
  ```

2. Run the application

  ```
  ng serve
  ```
  
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Setup your GitHub Application
1. Sign in into __GitHub__
2. Go to __settings__/__OAuth applications__ and __Register a new application__
3. Give your application a __name__ and fill in the __Homepage URL__ and __Authorization callback URL__ : ```http://localhost:4200/``` 
4. __Save__ (afterwards we will need the __Client ID__ and __Client Secret__ for our __gatekeeper__ setup)

## Setup Gatekeeper

1. Clone the repository into __src/app/shared__ directory

  ```
  git clone git@github.com:prose/gatekeeper.git
  ```
  
2. Install Dependencies

  ```
  cd src/app/shared && npm install
  ```

3. Adjust `config.json` (src/app/shared/gatekeeper/config.json)

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

4. Adjust `gatekeeper.config.ts` (src/app/gatekeeper.config.ts)

  ```
  export const gatekeeperConfig = {
    development: {
      client_id: 'GITHUB_APPLICATION_CLIENT_ID',
      redirect_uri: 'http://localhost:4200/auth',
      gatekeeper: 'http://localhost:9999'
    },
    production: {}
  };
  ```

5. Add Gatekeeper to `.gitignore`

6. __Serve__ 
  
  ```
  $ cd src/app/shared/gatekeeper && node server.js
  ```

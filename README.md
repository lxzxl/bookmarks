# Start Nav page

> A start page inspired by https://start.me

- Frontend is based on Vue.js and Vuex, css framework in Materialize.css;
- Backend is based on wilddog service (BaaS);

##Steps to deploy the site:

### 1. register a [Wilddog](https://www.wilddog.com/) app.

### 2. Set up wilddog rules

```json
{
  "rules": {
    ".read": "false",
    ".write": "false",
    "$user": {
      ".read": "auth.uid == $user",
      ".write": "auth.uid == $user"
    }
  }
}
```


### 3. Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

# build for production with minification
npm run build
```

### 4. Deploy to git pages.

- If you are using `<username>.github.io`, just add all files under build/ to you `<username>.github.io` repo.
- If you want to attach the site to a sub path, then change `assetsPublicPath` in `config.js` to `/<your-repo-name>/` and rebuild.

##License
[MIT License](LICENSE)

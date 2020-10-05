# lelab.space
## The community website

After retrieving the project install [node.js](http://nodejs.org) and launch this command in the cloned repository
```
$ npm clean install
```
This should install every dependencies.

For a better development experience, you are encouranged to install some more packages:
```
$ npm install vue-cli -g
``` 

Run the website:
```
$ npm run test  # or alternatively
$ npm test      # they make no difference
```

Run the website in production mode:
```
$ npm run
```

Run the website in development mode:
```
$ npm run dev
```

You can also start the server manually:
```
$ node server/app.js &
```

The HTTP port is configured on the port `5500` by default.

To run this website, you need to have your port `3000` free on your localhost, otherwise you will need to redirect the websocket service to the port `3001`.

In later releases, the website should be able to run from ``node.js`` instance using [express.js](https://expressjs.com) and [nuxt.js](https://nuxtjs.com). The latter is replacing a template system such as `ejs` that is less popular in the developer community. 
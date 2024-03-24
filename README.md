# Space Tourism Website (SPA)

This is a landing page containing 4 pages all themed towards space exploration. this project was built as a single page application (note: the decision to build it as such was personal, mainly to increase the difficulty and to better understand the concept of single page applications.

## Cast
- Vanilla Javascript as Programming Language
- SASS/SCSS as CSS Preprocessor
- HTML as Markup Language
- Vite.js as Build Tool and Module Bundler.

## Challenges
### Project size
The size of the project was quite daunting when i started to plan building.
Being the the project has multiple pages and each page has multiple screen sizes. so the approach i took was to build all the screens for one page before moving on to the next page. with this approach, i was able to finish the main project (excluding minor touches) in **6 days** (with the last day dedicated to handling deployment and related issues).

### Project structuring
I had a basic structure when i started, but as i continued i realized i hadn't though about all the edge cases of the project thoroughly before starting and that affected me when it grew in complexity being that i choose to build the single page app without a framework. i still have a lot of refactoring to do.

### Deployment
I'd like to say that the most frustrating part of this project was the deployment. i initially used **GitHub Pages** in cohorts with **GitHub Actions** to handle deployment, but this approach came with a few issues:
- first being that the `base` in the `vite.config.js` file must be set to the repo name the project would be pushed to i.e: `"base:" "/space-tourism-spa/"` and reference to the file within the project must reflect this path (well, in my case only the nav links `href` and the `pageRoutes[route].path` i had to input manually, as for the images and other assets were resolved by Vite) eg: The path for the Technology view would be `/space-tourism-spa/technology`.

- SPA Routing: when the site has been deployed, and you take a random view from the site such as: `www.webiste.com/about`, you'll get a 404 Error because the server is searching for the `.html` page which in this hypothetical situation, would be `about.html` but it doesn't exist as the views are injected dynamically using JavaScript and GitHub doesn't have a rather simple way to initiate a redirect so that no matter which **route/page/view** the user would request, the server will serve the base `index.html` (as is the nature of a single page application, to serve only one html file where the entire app will be loaded from) for all of them so the routing would then be handled by the **History API** and the custom-build page router in `router.js`. 

to solve both these problems, i moved deployment to **Netlify** which simplified this because now the `base` value would now return to `""` which denotes the root directory and i would then return the paths for the views and `href` for the nav links to `/pathname/` instead of `/space-tourism-spa/pathname/`. for the SPA routing issue, Netlify requires you to add a `_redirects` file in the public directory of the project (so that i won't get lost during the build process) and add to it  `/* /index.html 200` meaning for every route `/*` redirect to `/index.html` the has a `200` status code (ok). and that's all was needed to fix it. Plus Netlify enables **Continuous Integration** and **Continuous Delivery** so when you push changes to your GitHub repo, they will reflect on the site automatically.

## Live Site

Here's a link to view the site live [Space Tourism SPA](https://space-toursim-spa.netlify.app/)

## Installation

To run this project locally on your computer, you'll first clone the repository by running:

```bash
git clone https://github.com/johnnysedh3lllo/space-tourism-spa.git
```

then run the command below to enter the project directory.
```bash
cd space-tourism-spa
```

then run the command below to install project dependencies.
```bash
npm install
```

then run this to start the dev server
```bash
npm run dev
```
you'll most likely get a message like this in the terminal"

```
  VITE v5.1.6  ready in 784 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
``` 

you can either copy the ``http://localhost:5173/`` and paste it in your browser or drag your mouse cursor to the link, press **Ctrl** on you keyboard, and right click on the link and this will open the link on you default browser  or simply type the lowercase letter **o** into the server's terminal window and press **Enter**, this will also open the sever in your default browser automatically. 

## Contributing

Pull requests are welcome. Suggestions too, especially on the topic of project architecture.
For major changes, please open an issue first
to discuss what you would like to change.

## Connect 
Twitter (don't like the name "X"): [johnnysedh3lllo](https://twitter.com/johnnysedh3lllo)
Reddit : [johnnysedh3lllo](https://www.reddit.com/user/johnnysedh3lllo/)

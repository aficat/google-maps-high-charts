# google-maps-high-charts

This is a SPA React.JS application that utilises Google Maps and High Charts API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and mainly built from React framework, with third party libraries such as MDBReact, Google Maps API and High Charts API.

## Component Layout

        App
        |        
        |__ TopNav
        |
        |__ Routes - navigate between pages
        |    |__ HomePage
        |    |__ ChartPage   
        |    |    |__ utils : timeseries.json 
        |    | 
        |    |__ MapPage
        |         |__ utils : location.json 
        |
        |__ Footer

## Special Instructions And Handlings

### Setup Guide
1. Open Git Bash/ Command Prompt/ Terminal. Clone repository.
```
git clone https://github.com/aficat/google-maps-high-charts-api.git 
```

2. Navigate to project folder
```
cd google-maps-high-charts-api
```

3. Install dependencies:
```
npm install
```

4. Update Google API key in MapPage.js component.

5. Run application. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
npm run start
```

### Deployment
1. To publish it at https://myusername.github.io/my-app, run:

```
npm install --save gh-pages
```

2. Add the following scripts in your package.json:

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
The predeploy script will run automatically before deploy is run.

3. Add `"homepage": "https://<insert username>.github.io/<insert app-name>"` into package.json.

4. Deploy the site by running: 

```
npm run deploy
```

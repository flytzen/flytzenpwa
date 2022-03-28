# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Requirements
- npm install -g @azure/static-web-apps-cli
- npm install -g azure-functions-core-tools@3
- Extensions:
  - Azure Static Web Apps
  - Azure Functions

  ## Notes
  - `npm install` both in the root and in the API folder

  ## Run
  - cd api && npm install && npm run build
  - cd .. && npm install && npm run build
  - swa start build --api-location api

  ...surely this can be automated better...
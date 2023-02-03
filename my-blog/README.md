# MyBlog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.
The purpose of this application followed in [Angular Projects- Second Edition by Aristeidis Bampakos] was to build a **Blog** application, 
> understanding complex **routing** in  Angular
> structuring application into manageable modules following standard best practices,
> enhance project with JamStack characteristics using Scully Site generator

project demo link: https://youtu.be/tL2Pjcnk_l8

## Run application
> npx scully serve
> select "http://localhost:1668/"
And explore the application

## Errors resolving
Added  **"defaultProject": "your-project-name"**, to (angular.json) below **"newProjectRoot": "projects"**
to avoid error in executing **ng generate @scullyio/init:markdown ?**, and generate our **markdown files**

Add **scully.<my-project-name>.config.ts** to the root of the application, and  **manually** edited the configuration: as 

> import { ScullyConfig } from '@scullyio/scully';
> 
> export const config: ScullyConfig = {
>   projectRoot: './src',
>  projectName: 'demo',
>   distFolder: './dist/[PROJECT_NAME]', // output directory of your Angular build artifacts
>   outDir: './dist/static', // directory for scully build artifacts
>   defaultPostRenderers: [],
>   routes: {},
> };

because **ng add @scullyio/init** to automate **scully installation does not work** in Angular15 yet


# Angular 2

This repo contains some exercises to start with Angular 2.

## Exercise 1

The goal of this first exercise is to setup all tools needed for Angular 2 and to generate a new project from cli.

### Setup tools

- Install LTS version of [NodeJS](https://nodejs.org/dist/v6.9.4/node-v6.9.4-x86.msi)

- Install [VSCode](https://code.visualstudio.com/Download)

- Install Angular CLI from terminal
```sh
  npm install -g angular-cli
```

### Generate new project
```sh
  ng new --directory exercise --name exercise --style scss --prefix exercise
  # Ignore override README with n
```

### Run project
- Start Angular dev server
```sh
  ng serve
```

- Check that the app is running in your browser [localhost:4200](http://localhost:4200)

## Exercise 2

The goal of the second exercise is to create two simple components.

- Create a list component
  - In template iterate many time to display some items

- Create a item component
  - Display static data

## Exercise 3

The goal is to display a simple items list from an array.

- Enhance the list component
  - The component contains the list of items in a simple list (no models needed).

- Enhance the item component
  - The item name and value should be given through arguments using input decorator.

## Exercise 4

For this last exercise, we want to remove the static data in list component and get items from an http request.

- Create data model for an item (include a name and a value)
- Create items service
- On list loading, get items from service then render those items.

## Optional

Setup the app router for your project.

- Create a dedicated items page (/items)
- Create a home page (/) that contains a link to items page


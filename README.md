# Games
May 18, 2017

By Cameron Jensen and Nathaniel Meyer

This is a compilation of games that were created using the Createjs libraries. The libraries work in conjunction with canvas where we play objects that can be interacted with. The games include a slide puzzle, a simple runner game and a space game. These three games were placed in a single angular website.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Configuration / Dependancies

* Createjs libraries used with javascript
* Canvas is the stage used to display the objects

## Specs

1. Behavior: Add image to canvas
  * Input: var blah = new Image(), blah.src = source file, var image = new createjs.Bitmap(blah), stage.addChild(image), stage.update()
  * Output: image appears on canvas
2. Behavior: Move image
  * Input: function init() { image.x += 5 }
  * Output: image moves 5 pixels up the x axis

## Integration

  * Multiple pages routed using angular components, each containing a game
  * Each game runs on its own canvas

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

Copyright(c) 2017 **MIT License**

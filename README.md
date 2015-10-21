# blaze-material-ui

## Warning !! this is an alpha release
## This is not intended to be used on production environments


## Installation

Right now it is required to clone the repo and then use it locally.
In future it will be available from atmosphere

```shell
## add the package to meteor
meteor add codefights:blaze-material-ui
```


## Demos

### Component Catalog
[official demo page](http://blaze-material-ui.meteor.com/)

### Apps using this library
[CodeFights](https://codefights.com)

## Browser support

Currently targeted browsers are:

* Chrome (Desktop, Android)
* Firefox
* Safari 

(some browsers might have layout issues)

## Issues

Please feel free to contribute or report issues.

Since this is an alpha version we are making a new concept for or release candidate. It is most likely going to be a complete rewrite but we are happy about feedback and suggestions.


## inspired by polymer

This library provides material design elements in meteor.  
It is built on top of [meteor-blaze-compoents](https://github.com/peerlibrary/meteor-blaze-components) which uses [blaze](https://github.com/meteor/blaze)


## Create components from gulp

```shell
## requiers --type and --name to be set
## --type will declare the folder
## --name will declare the component name
gulp component --type=paper-elements --name=PaperButton
```

will create
```
lib
 ┗━┳ paper-elements
    ┗━┳ PaperButton
      ┣━ PaperButton.es6
      ┣━ PaperButton.scss
      ┗━ PaperButton.tpl.jade
```

## Usage

### Spacebars
```handlebars
<body>
  {{#PaperButton}}
    Button
  {{/PaperButton}}
</body>
```

### Jade
```jade
body
  +PaperButton() 
    | Button
```

## Elements

### Iron Elements
* IronIcon
  * [IronIcon](lib/iron-elements/IronIcon)


### Paper Elements
* PaperButton
  * [PaperButton](lib/paper-elements/PaperButton)
* PaperFab
  * [PaperFab](lib/paper-elements/PaperFab)
* PaperIconButton
  * [PaperIconButton](lib/paper-elements/PaperIconButton)
* PaperMaterial
  * [PaperMaterial](lib/paper-elements/PaperMaterial)
* PaperRipple
  * [PaperRipple](lib/paper-elements/PaperRipple)
* PaperProgress
  * [PaperProgress](lib/paper-elements/PaperProgress)
* PaperSpinner
  * [PaperSpinner](lib/paper-elements/PaperSpinner)
* PaperToolbar
  * [PaperToolbar](lib/paper-elements/PaperToolbar)


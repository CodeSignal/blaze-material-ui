# blaze-material-ui

## inspired by polymer

This library provides material design elements in meteor.  
It is built on top of [meteor-blaze-compoents](https://github.com/peerlibrary/meteor-blaze-components) which uses [blaze](https://github.com/meteor/blaze)

## Installation

```shell
## add the package to meteor
meteor add codefights:blaze-material-ui
```

## Build blaze-meteor-components

```shell
## install node modules
npm install
## call gulp to build a new version
gulp
```

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


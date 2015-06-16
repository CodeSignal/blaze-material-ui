# blaze-material-ui

## inspired by polymer

This library provides material design elements in meteor.  
It is built on top of [meteor-blaze-compoents](https://github.com/peerlibrary/meteor-blaze-components) which uses [blaze](https://github.com/meteor/blaze)

## Installation

```
meteor add codefights:blaze-material-ui
```

## Build blaze-meteor-components

```
npm install
gulp
```

## Create components from gulp

```
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
```
<body>
  {{#PaperButton}}
    Button
  {{/PaperButton}}
</body>
```

### Jade
```
body
  +PaperButton() 
    | Button
```

## Elements
### Iron Elements

#### IronIcon
![IronIcon](examples/readme/IronIcon.png)

```
{{> IronIcon icon=icon}}
```

### Paper Elements

#### PaperButton
![PaperButton](examples/readme/PaperButton.png)

```
{{# PaperButton}}[content]{{/PaperButton}}
```

#### PaperFab
![PaperFab](examples/readme/PaperFab.png)

```
{{> PaperFab icon=icon}}
```

#### PaperIconButton
![PaperIconButton](examples/readme/PaperIconButton.png)

```
{{> PaperIconButton icon=icon}}
```
#### PaperMaterial
![PaperMaterial](examples/readme/PaperMaterial.png)

```
{{>PaperMaterial elevation=elevation fit=''}}
{{# PaperMaterial elevation=elevation}}[content]{{/ PaperMaterial}}
```

#### PaperRipple

```
{{> PaperRipple}}
```

#### PaperProgress
![PaperProgress](examples/readme/PaperProgress.png)

```
{{> PaperProgress value=value min=min max=max}}
```

#### PaperSpinner
![PaperSpinner](examples/readme/PaperSpinner.png)

```
{{> PaperSpinner active=active}}
```

#### PaperToolbar
![PaperToolbar](examples/readme/PaperToolbar.png)

```
{{# PaperToolbar}}[content]{{/PaperToolbar}}
```

# blaze-material-ui

## inspired by polymer

This library provides material design elemets in meteor.  
It is built on top of [meteor-blaze-compoents](https://github.com/peerlibrary/meteor-blaze-components) which uses [blaze](https://github.com/meteor/blaze)

## Installation

```
meteor add codefights:blaze-material-ui
```

## Usage


### Spacebars
```
<body>
  {{#PaperButton}}Button{{/PaperButton}}
</body>
```

### Jade
```
body
  +PaperButton() Button
```

## Elements
### Iron Elements

#### IronIcon

```
  {{> IronIcon icon="menu"}}
```

### Paper Elements

#### PaperButton

```
  {{# PaperButton}}Button{{/PaperButton}}
```

#### PaperFab

```
  {{> PaperFab icon="menu"}}
```

#### PaperIconButton

```
  {{> PaperIconButton icon="menu"}}
```
#### PaperMaterial

```
  {{>PaperMaterial elevation="1"}}
  {{# PaperMaterial elevation="1"}}[content]{{/ PaperMaterial}}
```
#### PaperRipple

```
  {{> PaperRipple}}
```

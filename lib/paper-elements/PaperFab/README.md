# PaperFab


## Screenshot
![PaperFab ](../../../examples/readme/PaperFab.png)

## Usage

Basic usage

```handlebars
{{>PaperFab}}
```

Add a custom className

```handlebars
{{>PaperFab className="my-custom-class"}}
```

Change the icon

```handlebars
{{>PaperFab icon="category:icon-name"}}
```

## Properties

* Disabled

	```handlebars
	{{#PaperFab disabled=""}}[content]{{/PaperFab}}
	```

## Styling

Style the fab with CSS as you would a normal DOM element.

```css
.my-custom-class {
	background-color: blue;
	color: white;
}
```

By default, the ripple is the same color as the foreground at 25% opacity. You may customize the color using this selector:

```css
.my-custom-class::shadow paper-ripple {
	color: darkblue;
}
```
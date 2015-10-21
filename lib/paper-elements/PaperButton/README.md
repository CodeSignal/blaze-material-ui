# PaperButton


## Screenshot
![PaperButton ](../../../examples/readme/PaperButton.png)

## Usage

* Basic usage
	```handlebars
	{{#PaperButton}}[content]{{/PaperButton}}
	```

* Add a custom className
	```handlebars
	{{#PaperButton className="my-custom-class"}}[content]{{/PaperButton}}
	```

## Properties

* Raised

	```handlebars
	{{#PaperButton elevated="true"}}[content]{{/PaperButton}}
	```

* Toggle

	```handlebars
	{{#PaperButton toggles="true"}}[content]{{/PaperButton}}
	```

* Noink

	```handlebars
	{{#PaperButton noink="true"}}[content]{{/PaperButton}}
	```

* Disabled

	```handlebars
	{{#PaperButton disabled=""}}[content]{{/PaperButton}}
	```

## Styling

Style the button with CSS as you would a normal DOM element.

```css
.my-custom-class {
	background: blue;
	color: white;
}
```

By default, the ripple is the same color as the foreground at 25% opacity. You may customize the color using this selector:

```css
.my-custom-class[data-id=shadow] paper-ripple {
	color: darkblue;
}
```

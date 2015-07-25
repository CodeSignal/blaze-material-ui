# PaperIconButton


## Screenshot
![PaperIconButton ](../../../examples/readme/PaperIconButton.png)

## Usage

Basic usage

```handlebars
{{>PaperIconButton}}
```

Add a custom className

```handlebars
{{>PaperIconButton className="my-custom-class"}}
```

Change the icon

```handlebars
{{>PaperIconButton icon="refresh"}}
```

## Properties

* Disabled

	```handlebars
	{{#PaperIconButton disabled=""}}[content]{{/PaperFab}}
	```

## Styling

Style the fab with CSS as you would a normal DOM element.

```css
.my-custom-class {
	color: blue;
}
```

By default, the ripple is the same color as the foreground at 25% opacity. You may customize the color using this selector:

```css
.my-custom-class::shadow paper-ripple {
	color: darkblue;
}
```
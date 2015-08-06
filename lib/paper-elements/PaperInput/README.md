# PaperInput


## Screenshot
![PaperInput ](../../../examples/readme/PaperInput.png)

## Usage

Basic usage

```handlebars
{{> PaperInput}}
```

Add a custom className

```handlebars
{{> PaperInput className="my-custom-class"}}
```

Add a custom label

```handlebars
{{> PaperInput label="my-custom-label"}}
```

## Properties

* No Label Float

  ```handlebars
  {{#PaperInput labelFloat="false"}}[content]{{/PaperInput}}
  ```

* Disabled

  ```handlebars
  {{#PaperInput disabled=""}}[content]{{/PaperInput}}
  ```

## Styling

Style the input with CSS as you would a normal DOM element.

```css
// Label
.my-custom-class .label-is-highlighted label {
  color: blue;
}
```
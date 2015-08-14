# PaperToast


## Screenshot
![PaperToast ](../../../examples/readme/PaperToast.png)

## Usage

Basic usage

```handlebars
{{> PaperToast}}
```

Add a custom className

```handlebars
{{> PaperToast className="my-custom-class"}}
```

Add custom text

```handlebars
{{> PaperToast text="Woo hoo! Paper Toast has arrived!"}}
```

Add custom text

```handlebars
{{#PaperToast }}
  <div class="white-toast">Put some PB and J on me</div>
{{/PaperToast }}
```


## Styling

Style the checkmark with CSS as you would a normal DOM element.

```css
.my-custom-class {
  background-color: blue;
  color: white;
}
```

## JavaScript Callback

```handlebars
{{> PaperToast onClose=myCloseCallback}}

```
```javascript
  myCloseCallback: function() {
    return function(){
      alert('toast was closed');
    }
  }

```

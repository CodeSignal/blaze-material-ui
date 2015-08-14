# IronSelector 


## Screenshot
![IronSelector ](../../../examples/readme/IronSelector.png)

## Usage

Basic usage

```
{{#IronSelector}}
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
{{/IronSelector}}
```

Add a custom className

```
{{#IronSelector className="my-custom-class"}}
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
{{/IronSelector}}
```


```
{{#IronSelector selected="2"}}
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
{{/IronSelector}}
```


## JavaScript Callback

```handlebars
{{#IronSelector onUpdate=myUpdateCallback}}
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
{{/IronSelector}}

```
```javascript
  myUpdateCallback: function(instance) {
    return function(selector){
      alert('selected: ' + selector.selected.get());
    }(instance)
  }
```
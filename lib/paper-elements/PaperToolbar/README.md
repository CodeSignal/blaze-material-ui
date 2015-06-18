# PaperToolbar 

## Screenshot
![PaperToolbar ](../../../examples/readme/PaperToolbar.png)

## Usage

Basic usage

```handlebars
{{#PaperToolbar}}
  <div>[content]</div>
{{/PaperToolbar}}
```

Add a custom className

```handlebars
{{#PaperToolbar className="my-custom-class"}}
  <div>[content]</div>
{{/PaperToolbar}}
```

Change Size

```handlebars
{{#PaperToolbar className="[medium-tall || tall]"}}
  <div>[content]</div>
{{/PaperToolbar}}
```

Pin to section

```handlebars
{{#PaperToolbar className="tall"}}
  <div>[content]</div>
  <div class="middle">[content]</div>
  <div class="bottom">[content]</div>
{{/PaperToolbar}}
```

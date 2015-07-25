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
  {{#PaperToolbarTop}}
    [content]
  {{/PaperToolbarTop}}

{{/PaperToolbar}}
```

Change Size

```handlebars
{{#PaperToolbar className="[medium-tall || tall]"}}
  {{#PaperToolbarTop}}
    [content]
  {{/PaperToolbarTop}}
{{/PaperToolbar}}
```

Pin to section

```handlebars
{{#PaperToolbar className="paper-toolbar-1 medium-tall"}}

  {{#PaperToolbarTop}}
    {{>PaperIconButton icon="navigation:menu"}}
    <span class="title">Toolbar Top</span>
    {{>PaperIconButton icon="navigation:more-vert"}}
  {{/PaperToolbarTop}}

  {{#PaperToolbarMiddle}}
    {{>PaperIconButton icon="navigation:refresh"}}
    <span class="title">Toolbar Middle</span>
    {{>PaperIconButton icon="navigation:more-vert"}}
  {{/PaperToolbarMiddle}}

  {{#PaperToolbarBottom}}
    {{>PaperIconButton icon="navigation:refresh"}}
    <span class="title">Toolbar Bottom</span>
    {{>PaperIconButton icon="navigation:more-vert"}}
  {{/PaperToolbarBottom}}

{{/PaperToolbar}}
```

The PaperDrawerPanel provides 4 components.

1. PaperToolbar
  * the wrapper aound the content
2. PaperToolbarTop
  * The top content
3. PaperToolbarMiddle
  * The middle content
3. PaperToolbarBottom
  * The bottom content


For the logic to work you need to use this structure to define where your content should appear
# PaperHeaderPanel 


## Screenshot
![PaperHeaderPanel ](../../../examples/readme/PaperHeaderPanel.png)

## Usage

Basic usage

```handlebars
{{#PaperHeaderPanel mode="waterfall" className="paper-header-panel-0 yellow"}}
  <div class="paper-header">Waterfall</div>
  {{#PaperHeaderPanelMain}}
  <div class="content" style="height:2000px">content</div>
  {{/PaperHeaderPanelMain}}
{{/PaperHeaderPanel}}
```

`<div class="paper-header">Waterfall</div>` can be replaced by a PaperToolbar

the mode defines the way the panel behaves on scroll
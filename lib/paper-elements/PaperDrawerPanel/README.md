# PaperDrawerPanel 


## Screenshot
![PaperDrawerPanel ](../../../examples/readme/PaperDrawerPanel.png)

## Usage

Basic usage

```handlebars
  {{#PaperDrawerPanel}}
    {{#PaperDrawerPanelMain}}

      Main Content

    {{/PaperDrawerPanelMain}}
    {{#PaperDrawerPanelDrawer}}

      Drawer Content

    {{/PaperDrawerPanelDrawer}}
  {{/PaperDrawerPanel}}
```

## Description

The PaperDrawerPanel provides/requires 3 components.

1. PaperDrawerPanel
  * the wrapper aound the content
  * handles the selection
2. PaperDrawerPanelMain
  * The main content
3. PaperDrawerPanelMain
  * The drawer content


For the logic to work you need to use this structure to define where your content should appear

Any nestewd button with the classname `drawer-toggle-button` will toggle the sidebar. You can have multiple toggle buttons for the same panel
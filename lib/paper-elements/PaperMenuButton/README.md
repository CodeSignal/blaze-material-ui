# PaperMenuButton 


## Screenshot
![PaperMenuButton ](../../../examples/readme/PaperMenuButton.png)

## Usage

Basic usage

```
{{>PaperMenuButton}}
  {{#PaperItem className="paper-item-0" }}Foo{{/PaperItem}}
  {{#PaperItem className="paper-item-0" }}Foo{{/PaperItem}}
{{/PaperMenuButton}}
```

Add a custom className

```
{{#PaperMenuButton className="my-custom-class"}}
  {{#PaperItem className="paper-item-0" }}Foo{{/PaperItem}}
  {{#PaperItem className="paper-item-0" }}Foo{{/PaperItem}}
{{/PaperMenuButton}}

```

Links in content

```
{{#PaperMenuButton icon="navigation:arrow-drop_down" horizontalAlign="left" verticalAlign="top"}}
  {{#PaperItem className="paper-item-0" }}<a href='/test_1'>Inbox</a>{{/PaperItem}}
  {{#PaperItem className="paper-item-0" }}<a href='/test_2'>Starred</a>{{/PaperItem}}
  {{#PaperItem className="paper-item-0" }}<a href='/test_3'>Sent mail</a>{{/PaperItem}}
  {{#PaperItem className="paper-item-0" }}<a href='/test_4'>Draft</a>{{/PaperItem}}
{{/PaperMenuButton}}
```
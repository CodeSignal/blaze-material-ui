# PaperMaterial


## Screenshot
![PaperMaterial ](../../../examples/readme/PaperMaterial.png)

## Usage

* Basic usage

	```handlebars
	{{>PaperMaterial}}
	```

* Add a custom className

	```handlebars
	{{>PaperMaterial className="my-custom-class"}}
	```

* Add a content

	```handlebars
	{{#PaperMaterial}}[content]{{# PaperMaterial}}
	```

## Properties

* Elevation

	```handlebars
	{{>PaperMaterial elevation=3}}
	```
Reproach
========

> He, who survives his reputation, lives out of despite himself, like a man listening to 
his own reproach.

Theme for the [Hugo](http://gohugo.io) static site generator.

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contact](#contact)
- [Licence](#licence)

### Installation 

```
$ cd your_site_repo/
$ mkdir themes
$ cd themes
$ git clone https://github.com/dg01d/reproach
```

See the [official Hugo themes documentation](http://gohugo.io/themes/installing) for more 
info.

### Features

Right now the featureset is incomplete, but it has:

- Comprehensive set of social media links in the navbar
- SVG icons for each social media outlet -- different choices are a matter of editing one 
	svg file
- Webmentions _receive_ integration, with simple webmention styling
- Flexbox-based design

To be added to the featureset are:

- Twitter Card and OpenGraph Media links
- Customisation of rss generation

Note that while I wrote this to learn Hugo, golang templating & flexbox, 
it is heavily customised to my own site. It may not be useful for you.

Other features will be added here as I add them to the theme.

### Usage

This theme expects a relatively standard Hugo blog/personal site layout:
```
.
└── content
    ├── post
    |   ├── post1.md
    |   └── post2.md
    ├── license.md        // For the love of reason, licence _your_ work!
    └── other_page.md
```

Just run `hugo --theme=reproach` to generate your site!

### Configuration

TODO

### Contact

All feedback is welcome! Head over to the [issue tracker](https://github.com/dg01d/reproach/issues).

### License

Released under the [MIT license](https://github.com/dg01d/reproach/blob/master/LICENSE.md).
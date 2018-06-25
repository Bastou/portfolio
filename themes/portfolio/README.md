# portfolio bastien c Theme for Hugo

`bastien c` bastien c is a professional  and a responsive Hugo theme for developers and designers that offers a documentation section mixed with a landing page and a blog.

Copy at least the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary. 

Hugo includes a development server, so you can view your changes as you go :

``` sh
hugo server -w
```

Now you can go to [localhost:1313](http://localhost:1313) and the `kube`
theme should be visible.

### Configuring you website


To block individual pages from being indexed add `nofollow` to your page's front matter and set the value to `true`, like:

```toml
noindex = true
```

And, finally, if you're using Hugo `v0.18` or better, you can also add an `_index.md` file with the `noindex` front matter to control indexing for specific section list layouts:

```shell
├── content
│   ├── modules
│   │   ├── starry-night.md
│   │   └── flying-toilets.md
│   └── news
│       ├── _index.md
│       └── return-flying-toasters.md
```

To learn more about how crawlers use this feature read [block search indexing with meta tags](https://support.google.com/webmasters/answer/93710).

### Custom CSS

To add your own theme css or override existing CSS without having to change theme files do the following:

1. Create a `style.css` in your site's `layouts/static/css directory` or use `custom.css` file in 'themes/kube/static/css/custom.css`
1. Add link to this file in 'themes/kube/layouts/_default/baseof.html'.

Default `style block` :

```html
<!-- Your own theme here -->
 <link href="/css/custom.css" rel="stylesheet" type="text/css">

```

# Socket

Welcome to Socket theme! In this directory, you'll find the files you need to be able to use your theme. All layouts in `_layouts`, includes in `_includes`, sass files in `_sass` and any other assets in `assets`.

## Configuration

Fill all meta configuration in  `_config.yml`:

```yaml
title: The title of the website
email: Your email here
description: meta description for SEO
```

Use gulp if you need in  `gulpfile.js`:

  In this file there are gulp tasks

All packages are in  `package.json`:

## Structure

### _data
  All content stored in this folder and is divided into separate yml files.

### _includes
  Each duplicate block of the website is placed into special files and stored in this folder:

    ```yaml
    header.html
    nav.html
    nav-footer.html
    contact.html
    footer.html
    ```

### _layouts
  The main basic file stored here.
    ```yaml
    default.html
    ```

### _sass
  In this folder scss files for all parts of the website. The main file is:

    ```yaml
    style.scss
    ```

### assets
  in this folder are:

    ```yaml
    js/
    images/
    ```

## Contributing

Pull requests are welcome on GitHub at https://github.com/makecodework/order.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

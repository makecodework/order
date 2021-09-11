# Socket

Welcome to Socket theme! In this directory, you'll find the files you need to be able to use your theme. All layouts in `_layouts`, includes in `_includes`, sass files in `_sass` and any other assets in `assets`.


## Structure

### _data
  All content stored in this folder and is divided into separate yml files.

### _includes
  Each duplicated block of the website is placed into special files and stored in this folder:

      header.html
      nav.html
      nav-footer.html
      contact.html
      footer.html

### _layouts
  The main basic file stored here.

    default.html

### _sass
  In this folder scss files for all parts of the website. The main file is:

    style.scss

### assets
  in this folder are:

    js/
    images/

## Configuration

    Fill all meta configuration in  `_config.yml`:

    title: The title of the website
    email: Your email here
    description: meta description for SEO


    Use gulp if you need in  `gulpfile.js`: `there are gulp tasks in this file`

    All packages are in `package.json`:

      To set up all packages just run the command: `npm i`

    To set up a google map need to take a key from Google console and put it into:

        `<script async defer
          src="https://maps.googleapis.com/maps/api/js?key=HERE=initMap&libraries=&v=weekly">
        </script>`
    To set up the coordinates of your place take them from google map and then put them in:
        `assets/js/main.js -> line 15 -> const uluru = { lat: 39.7219538, lng: -91.5098444 };`
## Contributing

Pull requests are welcome on GitHub at https://github.com/makecodework/order.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

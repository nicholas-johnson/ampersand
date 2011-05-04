# Ampersand #

A jQuery plugin to make use of the gorgeous Open Source Ampersands library: http://opensourceampersands.com/

### What does it do? ##

It's a little jQuery plugin that works on any jQuery object and wraps ampersands in a span for separate styling.

### Why would I want to do that? ###

Ampersands are cool, but the default ampersands in many fonts are a bit lame. Having really nice ampersands can lift a design. Check out http://webofawesome.com for an example.

## Usage ##

In your header, import jQuery and the ampersand plugin

    <script src="/static/javascripts/jquery-1.6.min.js"></script>
    <script src="/static/javascripts/ampersand_plugin.js"></script>
    
Now in your JavaScript, call ampersand on any element, eg:

    $('h1').ampersand();
    $('h2').ampersand();
    $('.intro').ampersand();
    
## CSS ##

You will notice that any ampersands are wrapped in span tags like so:

    <span class="ampersand">&amp;</span>
    
Now you just need to style these up. Visit http://opensourceampersands.com/ and download the font face kit of your choosing. Pop the font on your server and in your CSS do something like:


    @font-face {
        font-family: 'myfont';
        src: url('/path-to-font/myfont.eot');
        src: url('/path-to-font/myfont.eot?iefix') format('eot'),
             url('/path-to-font/myfont.woff') format('woff'),
             url('/path-to-font/myfont.ttf') format('truetype'),
             url('/path-to-font/myfont.svg#webfont0ZQvEa4G') format('svg');
        font-weight: normal;
        font-style: normal;
    }
    
    span.ampersand {
      font-family: myfont;
      font-size:1.2em;
      line-height:0.8em;
    }
    
Obviously, replace path-to-font and myfont with the actual values.

## Limitations ##

In it's current form, it will replace any ampersand, including ones inside hyperlinks. I should really get round to fixing this...
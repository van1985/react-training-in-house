#React styling

The battle has begun. Since React JS is out, the old technique of applied **Embedded CSS** waked up.
Nowadays, we were have comfortable with ours best practices with style sheets and preprocessors like less or sass in others.
The inline style not is a new approach, its the very old, [this is tried in 1996](https://en.wikipedia.org/wiki/JavaScript_Style_Sheets) and it was a bad idea in that moment.
How we to see, there are two ways how to work with CSS in React JS.

1. Style sheets
  1. Internal
  2. External

2. Embedded CSS  

## When we speak the Style sheets

###Internal

```
    <head>
      <style>
      .welcome-acamica {
        color : white;
        font-family: 'Roboto';
      }
      </style>
    <body>
      <h1 class="welcome-acamica">Learn to code and design from industry leaders</h1>
    </body>
    </head>
```

###External

We are speak about when you create the code style in a file .css. With this file, you will able to write all style for you website or application. After that, you need to have link the style sheet with your HTML. [The definition according W3](https://www.w3.org/TR/html401/present/styles.html)


For example, the following short CSS style sheet (stored in the file "acamica.css"), sets the text color of a paragraph to white and surrounds it with font family Roboto:

```
    .welcome-acamica {
      color : white;
      font-family: 'Roboto';
    }
```

After that you have to link this style sheet to your source HTML document with the LINK element:

```
    <!DOCTYPE html>
    <html>
      <head>
        <link href="acamica.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <h1 class="welcome-acamica">Learn to code and design from industry leaders</h1>
      </body>
    </html>
```

## When we speak the Embedded CSS

We are speak about when you put your styles inside to a HTML element.

For example, with the above ours code

```
    <!DOCTYPE html>
    <html>
      <body>
        <h1 style="color: white; font-family: 'Roboto';">Learn to code and design from industry leaders</h1>
      </body>
    </html>
```

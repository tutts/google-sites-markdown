# Google Sites Markdown

As Google Sites doesn't support Tables or Markdown, this script allows you to write Markdown inside a HTML snippet within Google Sites. This reduces the amount of verbosity and styling HTML introduces, and making it easier to read.

## Usage

1. While editing a Google Site page double click to bring up the page options
2. Select `<> Embed`
3. Change to the `Embed Code` tab
4. Paste the code below and replace Markdown with your own
5. Save

```html
<script src="//cdn.jsdelivr.net/gh/tutts/google-sites-markdown/index.js"></script>

<script>
markdown`
# Hello world

Look I can write Markdown in Google Sites!

> Can I now add tables?

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

Hooray! 🎉
`
</script> 
```

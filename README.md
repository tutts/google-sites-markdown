# Google Sites Markdown

As Google Sites doesn't support Tables or Markdown, this script allows you to write Markdown inside a HTML snippet, and reducing the amount of verbosity and styling HTML introduces, to make HTML snippets easier to read.

## Usage

1. While editing a Google Site page double click to bring up the page options
2. Select `<> Embed`
3. Change to the `Embed Code` tab
4. Paste the code below and replace Markdown with your own
5. Save

```javascript
<script src="https://github.com/tutts/google-sites-markdown/blob/master/index.js"></script>

<script>
markdown`
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
`
</script> 
```

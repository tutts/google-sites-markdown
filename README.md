# Google Sites Markdown

As Google Sites doesn't support Tables or Markdown, this script allows you to write Markdown inside a HTML snippet within Google Sites. This reduces the amount of verbosity and styling HTML introduces, and making it easier to read.

## Usage

1. While editing a Google Site page double click to bring up the page options
2. Select `<> Embed`
3. Change to the `Embed Code` tab
4. Paste the code below and replace Markdown with your own
5. Save

```html
<script src="https://cdn.jsdelivr.net/gh/tutts/google-sites-markdown/index.js"></script>

<script>
markdown`
# Superheroes

Look I can write Markdown in Google Sites!

> Are tables now possible?

- [X] Yep!
- [ ] No

## Hero Table

| ID    | Name           | Hero         |
| ------- | ------------------- | ---------------- |
| 1      | Peter Parker  | Spiderman | 
| 2     | Bruce Wayne | Batman      |

*What about lists?*

- Yep
- Hooray! 🎉

### Hero Codes

**How do I add code snippets inside a tempalte literal?**

\`\`\`typescript
function isTheBestHero(spiderman: string): boolean {
  return true
}

const isSpidermanTheBestHero = isTheBestHero('spiderman')
\`\`\`
`
</script> 
```

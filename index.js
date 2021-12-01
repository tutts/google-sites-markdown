const styles = `
#qu-md table {
    padding: 0; width: 100%; font-family: Lato, sans-serif; border-collapse: collapse;
}
#qu-md table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
}
#qu-md table tr:nth-child(2n) {
    background-color: #f8f8f8; 
}
#qu-md table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
}
#qu-md table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
}
#qu-md table tr th :first-child, #qu-md table tr td :first-child {
    margin-top: 0;
}
#qu-md table tr th :last-child, #qu-md table tr td :last-child {
    margin-bottom: 0;
}
#qu-md table tr th {
  font-weight: 300;
  border: 1px solid rgb(23, 73, 97);
  text-align: left;
  margin: 0;
  padding: 6px 13px;
  background: rgba(34,110,147,1);
  color: white;
}
`;

const ROOT_NODE = "qu-md";

function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    //IE
    script.onreadystatechange = function() {
      if (script.readyState == "loaded" || script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function() {
      callback();
    };
  }

  script.src = url;
  script.async = false;
  document.getElementsByTagName("head")[0].appendChild(script);
}

function onDependencyLoaded(markdown) {
  // manage stylesheet
  const styleElement = document.createElement("style");
  const styleContent = document.createTextNode(styles);
  styleElement.appendChild(styleContent);
  document.head.appendChild(styleElement);

  // manage md
  const element = document.createElement("div");
  element.setAttribute("id", ROOT_NODE);
  element.innerHTML = marked.parse(markdown[0]);
  document.body.appendChild(element);
}

function markdown(markdown) {
  loadScript(
    "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
    onDependencyLoaded.bind(null, markdown)
  );
}

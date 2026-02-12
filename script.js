function convertRuby(text) {
  return text.replace(/\|(.+?)《(.+?)》/g, function(_, kanji, reading) {
    return `<ruby>${kanji}<rt>${reading}</rt></ruby>`;
  });
}

function preview() {
  const text = document.getElementById("editor").value;
  const html = convertRuby(text).replace(/\n/g, "<br>");
  document.getElementById("previewArea").innerHTML = html;
}

function publish() {
  const text = document.getElementById("editor").value;
  const html = convertRuby(text).replace(/\n/g, "<br>");

  const blob = new Blob(
    [`<html><head><meta charset="UTF-8"><link rel="stylesheet" href="../style.css"></head><body class="theme-thought"><div class="article">${html}</div></body></html>`],
    { type: "text/html" }
  );

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "new_article.html";
  link.click();
}
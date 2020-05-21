fetch("/releases/latest.md")
    .then(response => response.text())
    .then(function(text) {
        $("releases").html(marked(text))
    })
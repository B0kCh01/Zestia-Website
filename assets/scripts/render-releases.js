fetch("/releases/latest.md")
    .then(response => response.text())
    .then(function(text) {
        $("releases").html(marked(text));
    });

fetch("/releases/older.md")
    .then(response => response.text())
    .then(function(text) {
        $("releases-all").html(marked(text));
    });
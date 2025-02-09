document.addEventListener("DOMContentLoaded", function() {
    let prevLink = document.querySelector("a[rel='prev']");
    let nextLink = document.querySelector("a[rel='next']");

    if (prevLink) {
        prevLink.innerHTML = "« Zurück";
    }
    if (nextLink) {
        nextLink.innerHTML = "Weiter »";
    }
});
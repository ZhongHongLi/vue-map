(function(doc, win) {
    var html = doc.getElementsByTagName("html")[0],
        reEvt = "orientationchange" in win ? "orientationchange" : "resize",
        reFontSize = function() {
            var clientW = window.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
            if(!clientW) {
                return;
            }
            html.style.fontSize = (clientW / 750) * 100 + "px";
        }
    win.addEventListener(reEvt, reFontSize);
    doc.addEventListener("DOMContentLoaded", reFontSize);
})(document, window)
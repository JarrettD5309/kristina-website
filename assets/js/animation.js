$("a[data-slide-to]").on("click", function () {
    $("#puppetIndicators").carousel($(this).data("slide-to"));
});

$("a[data-slide-to]").on("click", function () {
    $("#objectsIndicators").carousel($(this).data("slide-to"));
});

$("a[data-slide-to]").on("click", function () {
    $("#caatIndicators").carousel($(this).data("slide-to"));
});
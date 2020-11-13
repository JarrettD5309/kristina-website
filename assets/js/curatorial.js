var layqaImg = [
    "Kristina_Centore_Layqa_Thumb_001.jpg",
    "Kristina_Centore_Layqa_Thumb_002.jpg",
    "Kristina_Centore_Layqa_Thumb_003.jpg",
    "Kristina_Centore_Layqa_Thumb_004.jpg",
    "Kristina_Centore_Layqa_Thumb_005.jpg",
    "Kristina_Centore_Layqa_Thumb_006.jpg"
];

var layqaFullImg = [
    "Kristina_Centore_Layqa_001.jpg",
    "Kristina_Centore_Layqa_002.jpg",
    "Kristina_Centore_Layqa_003.jpg",
    "Kristina_Centore_Layqa_004.jpg",
    "Kristina_Centore_Layqa_005.jpg",
    "Kristina_Centore_Layqa_006.jpg"
];

var paternosterImg = [
    "Kristina_Centore_Paternoster_Thumb_001.jpg",
    "Kristina_Centore_Paternoster_Thumb_002.jpg",
    "Kristina_Centore_Paternoster_Thumb_003.jpg",
    "Kristina_Centore_Paternoster_Thumb_004.jpg",
    "Kristina_Centore_Paternoster_Thumb_005.jpg",
    "Kristina_Centore_Paternoster_Thumb_006.jpg",
    "Kristina_Centore_Paternoster_Thumb_007.jpg",
    "Kristina_Centore_Paternoster_Thumb_008.jpg",
    "Kristina_Centore_Paternoster_Thumb_011.jpg"
];

var paternosterFullImg = [
    "Kristina_Centore_Paternoster_001.jpg",
    "Kristina_Centore_Paternoster_002.jpg",
    "Kristina_Centore_Paternoster_003.jpg",
    "Kristina_Centore_Paternoster_004.jpg",
    "Kristina_Centore_Paternoster_005.jpg",
    "Kristina_Centore_Paternoster_006.jpg",
    "Kristina_Centore_Paternoster_007.jpg",
    "Kristina_Centore_Paternoster_008.jpg",
    "Kristina_Centore_Paternoster_011.jpg"
];


for (var i = 0; i < layqaImg.length; i++) {
    var newCol = $("<div>").addClass("col-md-4 mt-4");
    var newLink = $("<a>").attr("href", "#layqa-modal").attr("data-toggle", "modal").attr("data-slide-to", i);
    var newImg = $("<img>").attr("src", "assets/images/layqa/" + layqaImg[i]).addClass("img-fluid curatorial").attr("alt", "Photo from Forever/Siempre");
    newLink.append(newImg);
    newCol.append(newLink);
    $("#layqa").append(newCol);

    if (i === 0) {

        var newDiv = $("<div>").addClass("carousel-item active");

        var newFullImg = $("<img>").attr("src", "assets/images/layqa/" + layqaFullImg[i]).addClass("d-block w-100").attr("alt", "Photo from Forever/Siempre");
        newDiv.append(newFullImg);
        $("#modal-carousel-layqa").append(newDiv);

    } else {

        var newDiv = $("<div>").addClass("carousel-item");

        var newFullImg = $("<img>").attr("src", "assets/images/layqa/" + layqaFullImg[i]).addClass("d-block w-100").attr("alt", "Photo from Forever/Siempre");
        newDiv.append(newFullImg);
        $("#modal-carousel-layqa").append(newDiv);
    }
}

$("a[data-slide-to]").on("click", function () {
    $("#layqaIndicators").carousel($(this).data("slide-to"));
});

for (var i = 0; i < paternosterImg.length; i++) {
    var newCol = $("<div>").addClass("col-md-4 mt-4");
    var newLink = $("<a>").attr("href", "#paternoster-modal").attr("data-toggle", "modal").attr("data-slide-to", i);
    var newImg = $("<img>").attr("src", "assets/images/paternoster/" + paternosterImg[i]).addClass("img-fluid curatorial").attr("alt", "Photo from The Artist Need Not Suffer");
    newLink.append(newImg);
    newCol.append(newLink);
    $("#paternoster").append(newCol);

    if (i === 0) {

        var newDiv = $("<div>").addClass("carousel-item active");

        var newFullImg = $("<img>").attr("src", "assets/images/paternoster/" + paternosterFullImg[i]).addClass("d-block w-100").attr("alt", "Photo from The Artist Need Not Suffer");
        newDiv.append(newFullImg);
        $("#modal-carousel-paternoster").append(newDiv);

    } else {

        var newDiv = $("<div>").addClass("carousel-item");

        var newFullImg = $("<img>").attr("src", "assets/images/paternoster/" + paternosterFullImg[i]).addClass("d-block w-100").attr("alt", "Photo from The Artist Need Not Suffer");
        newDiv.append(newFullImg);
        $("#modal-carousel-paternoster").append(newDiv);
    }
}

$("a[data-slide-to]").on("click", function () {
    $("#paternosterIndicators").carousel($(this).data("slide-to"));
});
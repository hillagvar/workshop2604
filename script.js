
const contentTexts = document.querySelectorAll(".accordion__content");
const clicks = document.querySelectorAll(".click");



for (let i = 0; i < clicks.length; i++) {
    clicks[i].addEventListener("click", function () {

        if (contentTexts[i].classList.contains("accordion__active")) {
            clicks[i].setAttribute("src", "open.png");
        } else {
            clicks[i].setAttribute("src", "close.png");
        }
        contentTexts[i].classList.toggle("accordion__active");

    });
}





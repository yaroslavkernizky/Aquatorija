window.onload = function () {

    var scrollUp = document.getElementById('button_toUp');

    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            scrollUp.style.display = 'block';
        } else {
            scrollUp.style.display = 'none';
        }
    };
};
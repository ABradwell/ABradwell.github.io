
var img_idx = 0;
var images;

function changeLeft() {

    if (img_idx - 1 < 0) {
        img_idx = images.length - 1;
    } else {
        img_idx = img_idx -1;
    }

    featured.style.backgroundImage = 'url(' + images[img_idx] + ')';
}

function changeRight() {

    if (img_idx+1 >= images.length) {
        img_idx = -1;
    }

    img_idx = img_idx + 1;
    featured.style.backgroundImage = 'url(' + images[img_idx] + ')';
}
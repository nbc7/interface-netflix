function buttonRight(element) {
    if (window.innerWidth <= 990) element.parentNode.parentNode.scrollLeft += 465;
    else if (window.innerWidth <= 1455) element.parentNode.parentNode.scrollLeft += 930;
    else if (window.innerWidth <= 1920) element.parentNode.parentNode.scrollLeft += 1395;
    else if (window.innerWidth <= 2385) element.parentNode.parentNode.scrollLeft += 1860;
    else if (window.innerWidth > 2385) element.parentNode.parentNode.scrollLeft += 2325;
};

function buttonLeft(element) {
    if (window.innerWidth <= 990) element.parentNode.parentNode.scrollLeft -= 465;
    else if (window.innerWidth <= 1455) element.parentNode.parentNode.scrollLeft -= 930;
    else if (window.innerWidth <= 1920) element.parentNode.parentNode.scrollLeft -= 1395;
    else if (window.innerWidth <= 2385) element.parentNode.parentNode.scrollLeft -= 1860;
    else if (window.innerWidth > 2385) element.parentNode.parentNode.scrollLeft -= 2325;
};
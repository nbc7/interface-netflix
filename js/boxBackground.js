const box = document.getElementsByClassName('box');

for (i = 0; i < box.length; i++) {
    if (box[i].children[0].width < 455) {
        const background = box[i].children[0].attributes.src.value;

        const backgroundElement = document.createElement("div");

        backgroundElement.style.maxHeight = "256px";
        backgroundElement.style.width = "455px";
        backgroundElement.style.backgroundImage = `url("${background}")`;
        backgroundElement.style.backgroundSize = "cover";
        backgroundElement.style.backgroundClip = "content-box"
        backgroundElement.style.backgroundAttachment = "local";
        backgroundElement.style.backgroundPosition = "left";
        backgroundElement.style.filter = "blur(8px)";
        backgroundElement.style.opacity = "0.7";

        box[i].children[0].parentNode.insertBefore(backgroundElement, box[i].children[0]);

        const backgroundElementAfter = document.createElement("div");

        backgroundElementAfter.style.maxHeight = "256px";
        backgroundElementAfter.style.width = "455px";
        backgroundElementAfter.style.backgroundImage = `url("${background}")`;
        backgroundElementAfter.style.backgroundSize = "cover";
        backgroundElementAfter.style.backgroundClip = "content-box"
        backgroundElementAfter.style.backgroundAttachment = "local";
        backgroundElementAfter.style.backgroundPosition = "right";
        backgroundElementAfter.style.filter = "blur(8px)";
        backgroundElementAfter.style.opacity = "0.7";

        box[i].children[0].parentNode.insertBefore(backgroundElementAfter, box[i].children[1].nextSibling);
    }
}
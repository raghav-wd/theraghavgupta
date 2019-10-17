function $(ele) {
    return document.querySelector(ele);
}

const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

//Type Method
TypeWriter.prototype.type = function () {
    // Current index of words
    const current = this.wordIndex % this.words.length;
    // Get the full text of current word
    const fullTxt = this.words[current];
    
    // Check if deleting
    if (this.isDeleting) {
       //Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = this.txt;

    // Initial Type Speed
    let typeSpeed = 30;

    //If word is complete
    if (!this.isDeleting && this.txt == fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
    }


    setTimeout(() => this.type(), typeSpeed)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const txtElement2 = document.querySelector('.txt-type2');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    if (txtElement2 !== null) {
        const words2 = JSON.parse(txtElement2.getAttribute('data-words'));
        new TypeWriter(txtElement2, words2, wait);
    }
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
    new pageAnimate();
}

const pageAnimate = function () {
    this.slideInTime = 0.3;
    this.animeFillMode = "forwards";
    this.animate();
}

pageAnimate.prototype.animate = function () {
    for (i = 0; i < 5; i++)
    document.getElementsByClassName('icons')[i].addEventListener("click", function () {
        var redirect = this.getAttribute('data-href');
        if($('.curtain') !== null)
        $('.curtain').style.display = "block";
        $('.overlay').style.animation = "slidein 2s ease-in";
        $('.page').style.opacity = "0";
        $('.overlay').style.animationFillMode = "forwards";

        setTimeout(function () {
            window.location = redirect;
        }, 1500)
    })
}











document.getElementsByClassName("conctact-me-button")[0].addEventListener("click", function() {
    
})


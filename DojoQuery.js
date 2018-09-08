function $Dojo(id) {
    this.buttonId = document.getElementById(id);
    this.click = function (callback) {
        this.buttonId.addEventListener("click", callback);
    };

    this.hover = function (hoverin, hoverout) {
        this.buttonId.addEventListener("mouseover", hoverin);
        console.log('The button was hovered on!');
        this.buttonId.addEventListener("mouseout", hoverout);
        console.log('The button was hovered on!');
    };

    return this;
}
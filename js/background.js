function Background(context) {
    this.context = context;
    this.images = [];
    this.speed = 0;
    this.amendmentPosition = 0;
}

Background.prototype = {
    newBackground: function (image) {
        this.images.push(image);
    },
    update: function() {
        // Update the amendment position
        this.amendmentPosition -= this.speed;

        // Amendment passed the position
        if (this.amendmentPosition < 0) {
            this.images.push(this.images.shift());
            this.amendmentPosition = this.images[0].width;
        }
    },
    draw: function() {
        let img = this.images; // Easier to write xD

        // First copy
        let posX = this.amendmentPosition - img[0].width;
        this.context.drawImage(img[0], posX, 0, img[0].width, img[0].height);

        let img2 = img.lenght < 2 ? img[0] : img[1];

        // Second copy
        posX = this.amendmentPosition;
        this.context.drawImage(img2, posX, 0, img2.width, img2.height);

    }
}

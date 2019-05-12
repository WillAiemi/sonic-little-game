function Sonic(context, image, x, y) {
    this.context = context;
    this.image = image;
    this.x = x;
    this.y = y;

    this.spritesheet = new Spritesheet(context, image, 3, 8);
    this.spritesheet.interval = 60;
    this.spritesheet.line = 1;
}

Sonic.prototype = {
    update: function() {
        this.spritesheet.nextFrame();
    },
    draw: function() {
        this.spritesheet.draw(this.x, this.y);
    }
}

class Game {
    constructor(options) {
        this.ratio = 400 / 600;
        this.mainSize = {
            // width: window.innerHeight*this.ratio,
            width: window.innerWidth,
            height: window.innerHeight
        }
        // this.memberData = options.memberData;
    };

    targetcan() {
        return new Promise(function(resolve){
            resolve();
        })
    };

    creatScenes(imgSrc) {
        var _self = this;
        var canvas = document.getElementById("canvas");
        var ccan = canvas.getContext('2d');
            canvas.width = this.mainSize.width;
            canvas.height = this.mainSize.height;
        ccan.clearRect(0,0,canvas.width,canvas.height);
        // console.log(this.ratio);
        _self.ratio = this.ratio;

        var imgBg = new Image();
        imgBg.addEventListener("load",function(){
            ccan.drawImage(imgBg,0,0,imgBg.width,imgBg.height,0,0,canvas.width,(canvas.width/_self.ratio));
        })
        imgBg.src = imgSrc;
    };

    creatItems(imgSrc,canX,canY) {
        var _self = this;
        var canvas = document.getElementById("canvas");
        var ccan = canvas.getContext('2d');
        var xpos = canX;
        var ypos = canY;

        var imgItem = new Image();
        imgItem.addEventListener("load",function(){
            ccan.drawImage(imgItem,0,0,imgItem.width,imgItem.height,xpos,ypos,imgItem.width,imgItem.height);
        })
        imgItem.src = imgSrc;
    }
}
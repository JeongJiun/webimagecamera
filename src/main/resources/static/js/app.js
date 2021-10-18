let faceapi;
let video;
let detections;
let star;
let heart; 
let glasses;
let itemName = '';
let isPlaying = true;
let cnv;
let downloadName = 0;
let cameraDiv;
const btns = [{name : 'avatar' , itemName: 'avatar'}, {name: 'hat' , itemName: 'hat'}];


const detectionOptions = {
    withLandmarks: true,
    withDescriptors: false
};

function preload() {
    star = loadImage('../image/star.png');
    heart = loadImage('../image/heart.png');
    glasses = loadImage('../image/glasses.png');
    avatar = loadImage('https://avatar.hange.jp/IMG_AVTR/AWFS_1211NNN-4_P_M_F01_P877_26DY_84OP_M9W4_15HI_4B22.GIF')
    hat = loadImage('https://avaimg.hange.jp/_images/itemshop/view/ae/ae4op.gif')
}

function setup() {
    const x = (windowWidth) / 5;
    const y = (windowHeight) / 4;
    cameraDiv = createElement('div');
    cameraDiv.elt.style.position = 'fixed';

    frameRate(120);
    initCanvas(x, y);
    createButtons(x, y);
    initVideo();
}

function initCanvas(x, y) {
    cnv = createCanvas(360, 270);

    cnv.position(x, y);
    cameraDiv.child(cnv);
}

function createButtons(x, y){
    btns.forEach((btn, idx) => {
        const { name, itemName: iName } = btn;
        const element = createButton(name);

        element.position(x + width * idx / 4, y + height);
        cameraDiv.child(element);
        element.mousePressed(function () {
            itemName = iName;
        });
    });

    // 촬영 버튼 생성.
    button4 = createButton('촬영');
    const listDiv = createElement('div');
  
    cameraDiv.child(button4);
    listDiv.size(width, height);
    listDiv.position(x + width + 10, 10);
    button4.position(x + width * 3 / 4, y + height);

    // 촬영 버튼이 눌려졌을때 이미지로 남기기
    button4.mousePressed(function(){
        const data = cnv.canvas.toDataURL();
        const a = createElement('a');
        const img = createElement('img');
        
        img.size(width / 2, height / 2);
        img.elt.src = data;
        a.elt.href = data;
        a.elt.download = 'image' + str(downloadName++) + '.jpg';
        a.child(img);
        listDiv.child(a);
    });
}

function initVideo(){
    video = createCapture(VIDEO);

    video.size(width, height);
    video.hide();
    faceapi = ml5.faceApi(video, detectionOptions, modelReady);
}
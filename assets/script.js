"use-strict";
/*  Love Saroha
    lovesaroha1994@gmail.com (email address)
    https://www.lovesaroha.com (website)
    https://github.com/lovesaroha  (github)
*/

// Themes.
const themes = [
    {
        normal: "#5468e7",
        dark: "#4353b9",
        light: "#98a4f1",
        veryLight: "#eef0fd"
    }, {
        normal: "#e94c2b",
        dark: "#ba3d22",
        veryLight: "#fdedea",
        light: "#f29480"
    }
];
// Choose random color theme.
let colorTheme = themes[Math.floor(Math.random() * themes.length)];

// This function set random color theme.
function setTheme() {
    // Change css values.
    document.documentElement.style.setProperty("--primary", colorTheme.normal);
    document.documentElement.style.setProperty("--primary-light", colorTheme.light);
    document.documentElement.style.setProperty("--primary-dark", colorTheme.dark);
}

// Set random theme.
setTheme();

// Get canvas info from DOM.
var canvas;
var ctx;
let x;
let y;
let ox;
let oy;
let mouseDown = false;
let inputs = [];
const classes = ['flashlight', 'belt', 'mushroom', 'pond', 'strawberry', 'pineapple', 'sun', 'cow', 'ear', 'bush', 'pliers', 'watermelon', 'apple', 'baseball', 'feather', 'shoe', 'leaf', 'lollipop', 'crown', 'ocean', 'horse', 'mountain', 'mosquito', 'mug', 'hospital', 'saw', 'castle', 'angel', 'underwear', 'traffic_light', 'cruise_ship', 'marker', 'blueberry', 'flamingo', 'face', 'hockey_stick', 'bucket', 'campfire', 'asparagus', 'skateboard', 'door', 'suitcase', 'skull', 'cloud', 'paint_can', 'hockey_puck', 'steak', 'house_plant', 'sleeping_bag', 'bench', 'snowman', 'arm', 'crayon', 'fan', 'shovel', 'leg', 'washing_machine', 'harp', 'toothbrush', 'tree', 'bear', 'rake', 'megaphone', 'knee', 'guitar', 'calculator', 'hurricane', 'grapes', 'paintbrush', 'couch', 'nose', 'square', 'wristwatch', 'penguin', 'bridge', 'octagon', 'submarine', 'screwdriver', 'rollerskates', 'ladder', 'wine_bottle', 'cake', 'bracelet', 'broom', 'yoga', 'finger', 'fish', 'line', 'truck', 'snake', 'bus', 'stitches', 'snorkel', 'shorts', 'bowtie', 'pickup_truck', 'tooth', 'snail', 'foot', 'crab', 'school_bus', 'train', 'dresser', 'sock', 'tractor', 'map', 'hedgehog', 'coffee_cup', 'computer', 'matches', 'beard', 'frog', 'crocodile', 'bathtub', 'rain', 'moon', 'bee', 'knife', 'boomerang', 'lighthouse', 'chandelier', 'jail', 'pool', 'stethoscope', 'frying_pan', 'cell_phone', 'binoculars', 'purse', 'lantern', 'birthday_cake', 'clarinet', 'palm_tree', 'aircraft_carrier', 'vase', 'eraser', 'shark', 'skyscraper', 'bicycle', 'sink', 'teapot', 'circle', 'tornado', 'bird', 'stereo', 'mouth', 'key', 'hot_dog', 'spoon', 'laptop', 'cup', 'bottlecap', 'The_Great_Wall_of_China', 'The_Mona_Lisa', 'smiley_face', 'waterslide', 'eyeglasses', 'ceiling_fan', 'lobster', 'moustache', 'carrot', 'garden', 'police_car', 'postcard', 'necklace', 'helmet', 'blackberry', 'beach', 'golf_club', 'car', 'panda', 'alarm_clock', 't-shirt', 'dog', 'bread', 'wine_glass', 'lighter', 'flower', 'bandage', 'drill', 'butterfly', 'swan', 'owl', 'raccoon', 'squiggle', 'calendar', 'giraffe', 'elephant', 'trumpet', 'rabbit', 'trombone', 'sheep', 'onion', 'church', 'flip_flops', 'spreadsheet', 'pear', 'clock', 'roller_coaster', 'parachute', 'kangaroo', 'duck', 'remote_control', 'compass', 'monkey', 'rainbow', 'tennis_racquet', 'lion', 'pencil', 'string_bean', 'oven', 'star', 'cat', 'pizza', 'soccer_ball', 'syringe', 'flying_saucer', 'eye', 'cookie', 'floor_lamp', 'mouse', 'toilet', 'toaster', 'The_Eiffel_Tower', 'airplane', 'stove', 'cello', 'stop_sign', 'tent', 'diving_board', 'light_bulb', 'hammer', 'scorpion', 'headphones', 'basket', 'spider', 'paper_clip', 'sweater', 'ice_cream', 'envelope', 'sea_turtle', 'donut', 'hat', 'hourglass', 'broccoli', 'jacket', 'backpack', 'book', 'lightning', 'drums', 'snowflake', 'radio', 'banana', 'camel', 'canoe', 'toothpaste', 'chair', 'picture_frame', 'parrot', 'sandwich', 'lipstick', 'pants', 'violin', 'brain', 'power_outlet', 'triangle', 'hamburger', 'dragon', 'bulldozer', 'cannon', 'dolphin', 'zebra', 'animal_migration', 'camouflage', 'scissors', 'basketball', 'elbow', 'umbrella', 'windmill', 'table', 'rifle', 'hexagon', 'potato', 'anvil', 'sword', 'peanut', 'axe', 'television', 'rhinoceros', 'baseball_bat', 'speedboat', 'sailboat', 'zigzag', 'garden_hose', 'river', 'house', 'pillow', 'ant', 'tiger', 'stairs', 'cooler', 'see_saw', 'piano', 'fireplace', 'popsicle', 'dumbbell', 'mailbox', 'barn', 'hot_tub', 'teddy-bear', 'fork', 'dishwasher', 'peas', 'hot_air_balloon', 'keyboard', 'microwave', 'wheel', 'fire_hydrant', 'van', 'camera', 'whale', 'candle', 'octopus', 'pig', 'swing_set', 'helicopter', 'saxophone', 'passport', 'bat', 'ambulance', 'diamond', 'goatee', 'fence', 'grass', 'mermaid', 'motorbike', 'microphone', 'toe', 'cactus', 'nail', 'telephone', 'hand', 'squirrel', 'streetlight', 'bed', 'firetruck'];

let model;
// Load trained model.
tf.loadLayersModel("https://models.lovesaroha.com/Doodle-Model/model.json").then(savedModel => {
    model = savedModel;
    document.getElementById("view_id").innerHTML = document.getElementById("homePage_id").innerHTML;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    // Canvas mouse events. 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    draw();
}).catch(e => { console.log(e); });


//  On mouse mouse down.
function onMouseDown(e) {
    mouseDown = true;
}

// On mouse up.
function onMouseUp(e) {
    mouseDown = false;
}

// On mouse move.
function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
}


// Draw function.
function draw() {
    ctx.lineWidth = 20;
    ctx.strokeStyle = colorTheme.normal;
    if (mouseDown) {
        if (!ox || !oy) {
            ox = x;
            oy = y;
        }
        ctx.beginPath();
        ctx.lineCap = "round";
        ctx.moveTo(x, y);
        ctx.lineTo(ox, oy);
        ctx.stroke();
    }
    ox = x;
    oy = y;
    window.requestAnimationFrame(draw);
}

// This function guess based on canvas drawing.
function predict() {
    if(!x || !y) { return; }
    let image = new Image();
    image.src = canvas.toDataURL();
    image.onload = function (e) {
        // Resize image.
        inputs = [];
        var newCanvas = document.createElement("canvas").getContext("2d");
        newCanvas.drawImage(e.target, 0, 0, 28, 28);
        let scaled = newCanvas.getImageData(0, 0, 28, 28).data;
        let row = [];
        for (let i = 3; i < scaled.length; i += 4) {
            row.push([parseFloat((scaled[i]) / 255)]);
            if (row.length == 28) {
                inputs.push(row);
                row = [];
            }
        }
        // Predict on image data.
        let prediction = model.predict(tf.tensor([inputs])).dataSync();
        let index = 0;
        for (let i = 0; i < prediction.length; i++) {
            if (prediction[index] < prediction[i]) {
                index = i;
            }
        }
        document.getElementById("result_id").innerHTML = `<h3 class="m-3 text-white font-bold">${classes[index]} ${(prediction[index] * 100).toFixed(2)}%</h3>`;
    }
}

window.addEventListener("mouseup", onMouseUp);

// This function clear canvas. 
function clearCanvas() {
    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
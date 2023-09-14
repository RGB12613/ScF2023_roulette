const group_name = [
    "17th",
    "2年国際教養",
    "めんそーれ！沖縄Cafe",
    "沖縄行く前に映像作っちゃった件",
    "4年学年企画",
    "5年学年企画",
    "6年1組",
    "6年2組",
    "6年3組",
    "6年4組",
    "大泉人",
    "前期音楽部",
    "生徒会執行部",
    "前期ダンス部",
    "後期ダンス部",
    "It is IT",
    "後期音楽部",
    "管弦楽部",
    "水泳部",
    "茶道部",
    "D：Jack",
    "Gl!tch5",
    "WORM",
    "Le verre",
    "Tour de Food",
    "アルティメットクラブ",
    "生徒会執行部",
    "「非常識」に捧げよ",
    "図書委員会",
    "どきどきふらみんご",
    "美術部",
    "科学部",
    "ボランティア部",
    "じゃずのつどい",
    "13thDP"
]

let choosen_list = [];

const default_image_path = "./images/default.png";

const img = document.getElementById("image");
const grnm = document.getElementById("group_name");
const btn_start = document.getElementById("btn_start");
const btn_reset = document.getElementById("btn_reset");

const snd_pi = new Audio("./sounds/pi.wav");
const snd_paan = new Audio("./sounds/paan.wav");

btn_start.addEventListener("click", startRoulette);
btn_reset.addEventListener("click", resetImage);

let loopId;
const loopMax = 30;
let loopCount = 0;
let chooseImageIndex;

const timeoutSets = [100, 100, 100, 250, 250, 250, 500, 750, 1000]

img.src = default_image_path;

function startRoulette() {
    loopCount = 0;
    chooseImageIndex = Math.floor(Math.random() * group_name.length);
    resetImage();
    changeImage();
}

function changeImage() {
    available_list = group_name.filter(i => choosen_list.indexOf(i) == -1);
    chooseImageIndex += Math.floor(Math.random() * 10) + 1

    const index = chooseImageIndex - available_list.length * Math.floor(chooseImageIndex / available_list.length);
    console.log(index);
    img.src = "./images/" + available_list[index] + ".jpg";
    grnm.innerHTML = available_list[index];

    if (loopCount < loopMax) {
        loopCount++;

        let timeout;
        if (loopMax - loopCount >= timeoutSets.length) {
            timeout = 60;
        } else {
            timeout = timeoutSets[timeoutSets.length - Math.abs(loopMax - loopCount) - 1];
        }
        console.log(timeout);
        snd_pi.play();
        loopId = setTimeout(changeImage, timeout);
    } else {
        console.log("stopped");
        choosen_list.push(grnm.innerHTML);
        console.log(choosen_list);
        snd_paan.play();
    }

}

function resetImage() {
    img.src = default_image_path;
    grnm.innerHTML = "";
}

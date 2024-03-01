



let time = 0;
let timer;

function setTime() {
    let second = time % 60;
    let minute = Math.floor(time / 60);
    $("#box").text(`${minute}:${second}`);
    time++;
}

$("#start").click(() => {
    timer = setInterval(() => {
        setTime();
    }, 1000);
})

$("#stop").click(() => {
    clearInterval(timer);
})

$("#reset").click(() => {
    time = 0;
    $("#box").text("0:0")
})
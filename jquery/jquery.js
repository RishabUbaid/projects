// let box=$(".box");
// console.log(box);
// box.text("hi");
// box.html("<b>heloo</b>")
// box.css({
//     backgroundColor:"blue", 
//     color:"white"
// });

// let m=$("<h1></h1>")
// m.text("7");
// box.html(m);
// console.log(m);



// $("button").click(()=>{
//     alert("clicked")
// })
    

// $("button").click(()=>{
//     box.css("background-color","red")
// })



// $("img").attr("src","./img1.jpeg")


$(document).ready(function() {
    var timer;
    var hours = 0, minutes = 0, seconds = 0;

    function updateTimer() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        var formattedTime =
            (hours < 10 ? '0' + hours : hours) + ':' +
            (minutes < 10 ? '0' + minutes : minutes) + ':' +
            (seconds < 10 ? '0' + seconds : seconds);

        $('#timer').text(formattedTime);
    }

    $('#start').on('click', function() {
        timer = setInterval(updateTimer, 1000);
    });

    $('#stop').on('click', function() {
        clearInterval(timer);
    });

    $('#reset').on('click', function() {
        clearInterval(timer);
        hours = minutes = seconds = 0;
        $('#timer').text('00:00:00');
    });
});
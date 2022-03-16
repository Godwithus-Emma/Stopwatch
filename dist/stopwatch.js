function Stopwatch(display) {
    var startTime, endTime, running, duration = 0;
    var timer;
    this.show = function (val) {
        display.innerText = val;
    };
    this.start = function () {
        var _this = this;
        if (running)
            throw new Error('Stopwatch has already started');
        running = true;
        startTime = new Date();
        this.show("00");
        timer = setInterval(function () {
            var now = new Date();
            var elapsedTime = (now.getTime() - startTime.getTime()) / 1000;
            var elapsed = Math.round(elapsedTime);
            _this.show(elapsed.toString() + "s");
        }, 1000);
    };
    this.stop = function () {
        if (!running)
            throw new Error("Stopwatch is not started yet");
        clearInterval(timer);
        running = false;
        //     endTime= new Date();
        // const seconds= (endTime.getTime() - startTime.getTime())/1000;
        // duration += seconds;
    };
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}
var span = document.createElement("span");
var stopw = new Stopwatch(span);
var container = document.createElement("div");
var startbtn = document.createElement("button");
startbtn.innerText = "Start";
var stopbtn = document.createElement("button");
stopbtn.innerText = "Stop";
var reset = document.createElement("button");
reset.innerText = "Reset";
container.appendChild(span);
container.appendChild(startbtn);
container.appendChild(stopbtn);
container.appendChild(reset);
startbtn.addEventListener("click", function () { return stopw.start(); });
stopbtn.addEventListener("click", function () { return stopw.stop(); });
reset.addEventListener("click", function () { return stopw.reset(); });
document.body.appendChild(container);

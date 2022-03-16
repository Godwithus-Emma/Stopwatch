function Stopwatch(display:HTMLElement) {
   let startTime, endTime, running, duration=0;
   let timer;
    this.show=function(val:string){
        display.innerText=val;
    }
    this.start= function() {
        if (running)
            throw new Error('Stopwatch has already started')
        running= true;
        startTime = new Date();
        this.show("00");
        timer = setInterval(()=>{
            var now = new Date();
            var elapsedTime = (now.getTime()-startTime.getTime())/1000;
            var elapsed= Math.round(elapsedTime);
            this.show(elapsed.toString()+"s");
        },1000);
    };

    this.stop= function(){
        if(!running)
            throw new Error("Stopwatch is not started yet")
        clearInterval(timer);
        running= false; 
    //     endTime= new Date();
    // const seconds= (endTime.getTime() - startTime.getTime())/1000;
    // duration += seconds;
    };

    this.reset= function(){
        startTime= null;
        endTime= null;
        running= false;
        duration= 0;
    };
    Object.defineProperty(this, 'duration', {
        get: function(){ return duration; }
    });

}

var span=document.createElement("span");
var stopw = new Stopwatch(span);
var container= document.createElement("div");

var startbtn = document.createElement("button");
startbtn.innerText="Start";
var stopbtn = document.createElement("button");
stopbtn.innerText="Stop";
var reset = document.createElement("button");
reset.innerText="Reset";
container.appendChild(span);
container.appendChild(startbtn);
container.appendChild(stopbtn);
container.appendChild(reset);
startbtn.addEventListener("click", ()=>stopw.start())
stopbtn.addEventListener("click", ()=>stopw.stop())
reset.addEventListener("click", ()=>stopw.reset())


document.body.appendChild(container);




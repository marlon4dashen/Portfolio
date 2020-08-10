function smoothScroll(target, duration){
    var target = document.querySelector(target);
    
    var targetPostition = target.getBoundingClientRect().top;

    var startPosition = window.pageYOffset;

    var dist = targetPostition - startPosition;

    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, dist, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d){
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}



var aboutme = document.querySelector(".aboutme");
aboutme.addEventListener('click', function(){
    smoothScroll('.box1', 1000);
})

var projects = document.querySelector(".projects");
projects.addEventListener('click', function(){
    smoothScroll('.box2', 1000);
})

var aims = document.querySelector(".future");
aims.addEventListener('click', function(){
    smoothScroll('.box3', 1000);
})

var fun = document.querySelector(".fun");
fun.addEventListener('click', function(){
    smoothScroll('.box4', 1000);
})

var section2 = document.querySelector(".box1");
section2.addEventListener('click', function(){
    smoothScroll('.main', 1000);
})

var section3 = document.querySelector(".box2");
section3.addEventListener('click', function(){
    smoothScroll('.main', 1000)
})

var section4 = document.querySelector(".box3");
section4.addEventListener('click', function(){
    smoothScroll('.main', 1000)
})

var section5 = document.querySelector(".box4");
section5.addEventListener('click', function(){
    smoothScroll('.main', 1000)
})
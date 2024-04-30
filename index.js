let hrs = document.getElementById('hours');
let mn = document.getElementById('min');
let s = document.getElementById('sec');


setInterval(()=>{
    let time = new Date();

hrs.innerHTML = time.getHours();
mn.innerHTML = time.getMinutes();
s.innerHTML = time.getSeconds();
}, 0)


let typed = new Typed("#tipeado",{
    strings:['Desarrollador','Desarrollador Front-End',' Frontend Developer'],
    typeSpeed:100,
    backspeed:60,
    loop:true
})

let progress = document.getElementById('progressbar')
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height=progressHeight + '%'
}
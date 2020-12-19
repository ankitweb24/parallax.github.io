let bdy = document.getElementById('bdy');
console.log(bdy);
let check_btn = document.getElementById('check_btn');
check_btn.addEventListener('click', () => {
    bdy.classList.toggle('dark_mode');
});

let up_mode = document.getElementById('up_mode');


up_mode.addEventListener('click', () => {
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; //for chrome,mozila,firefox,opera
})

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        up_mode.style.display = "block";
    } else {
        up_mode.style.display = "none";
    }
}
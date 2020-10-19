let btn = document.getElementById('btn-nav');
btn.addEventListener('click', function(){
    let nav = document.getElementById('topnav');
    nav.classList.toggle('responsive');
    nav.classList.toggle('navigation')
})

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let img = document.querySelector('.content-img');
let registre = document.querySelector('.registre');
let login = document.querySelector('.login');
btn1.addEventListener('click', function(){
    
        img.style.display = 'none';
        registre.style.display = 'none';
        login.style.display = 'block';
    
})

btn2.addEventListener('click', function(){
    
        img.style.display = 'none';
        registre.style.display = 'block';
        login.style.display = 'none';
    
})
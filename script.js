const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navbarlinks = document.getElementsByClassName('navbarList')[0];
const tema = document.getElementsByClassName('tema')[0];
const feat = document.getElementsByClassName('feat')[0];



toggleButton.addEventListener('click', ()=>{
    navbarlinks.classList.toggle('active');
    tema.classList.toggle('active');
    feat.classList.toggle('active');
})

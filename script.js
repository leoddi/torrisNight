const toggleButton = document.getElementsByClassName('toggleButton')[0];
const navbarlinks = document.getElementsByClassName('navbarList')[0];
const tema = document.getElementsByClassName('tema')[0];
const feat = document.getElementsByClassName('feat')[0];
const button = document.getElementsByClassName('center')[0];
const titolo = document.getElementsByClassName('css-3d-text')[0];
const sottotitolo = document.getElementsByClassName('css-3d-text-2')[0];


button.addEventListener('click', ()=>{
    titolo.classList.toggle('active');
    sottotitolo.classList.toggle('active');
})

toggleButton.addEventListener('click', ()=>{
    navbarlinks.classList.toggle('active');
    tema.classList.toggle('active');
    feat.classList.toggle('active');
})

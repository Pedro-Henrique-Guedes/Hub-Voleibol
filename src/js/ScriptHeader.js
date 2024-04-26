function menuShow() {
    let menuMobile = document.querySelector('.openMenu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../src/imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../src/imagens/close_white_36dp.svg";
    }
}
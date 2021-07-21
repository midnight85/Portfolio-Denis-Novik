let iconMenu = document.querySelector(".menu-icon");
if (iconMenu) {
    let menuBody = document.querySelector(".menu-body");
    iconMenu.addEventListener("click", (e) => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
};
// let menuBody1 = document.querySelector(".menu-body");
// let headerText = document.querySelector(".header-text")
// let headerLang = document.querySelector(".header-text-lang");
// if (document.body.clientWidth <= 767){
//     menuBody1.appendChild(headerLang);
// }
// else{
//     headerText.appendChild(headerLang);
// }
// window.addEventListener("resize",(e)=>{ 
//     // console.log(document.body.clientWidth);
// if (document.body.clientWidth <= 767){
//     menuBody1.appendChild(headerLang);
// }
// else{
//     headerText.appendChild(headerLang);
// }
// });
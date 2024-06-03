let OpenNav = function(icon){
    let Nav = document.querySelector("ul");
    if(Nav.style.height == "0px"){
        Nav.style.height = "300px";
        icon.classList.add("fa-times");
        icon.classList.remove("fa-bars");
    } else{
        Nav.style.height = "0px";
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
    }

}
const $ = document.querySelector.bind(document),
    $$ = document.querySelectorAll.bind(document);

const titleContent = $$('.btn1'),
    boxContent = $$('.other');

titleContent.forEach((title, index) => {
    const boxed = boxContent[index]
    title.onclick = function () {
        $('.btn1.active').classList.remove('active')
        $('.other.active').classList.remove('active')
        this.classList.add('active')
        boxed.classList.add('active')
    }
})
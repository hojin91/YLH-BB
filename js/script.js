let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function search() {
    let filter = document.getElementById('search-box').value.toUpperCase();

    let item = document.querySelectorAll('.box');

    let l = document.getElementsByTagName('h3');

    for(var i = 0;i<=l.length;i++){
        let a=item[i].getElementsByTagName('h3')[0];

        let value=a.innerHTML || a.innerText || a.textContent;

        if( value .toUpperCase().indexOf(filter) > -1){
            item[i].style.display="";
        }
        else
        {
            item[i].style.display="none ";
        }
    }

}
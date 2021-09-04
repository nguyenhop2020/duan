const one = document.querySelector.bind(document);
const tows = document.querySelectorAll.bind(document);

var iconsearch = one('.search_js');
var boxsearch = one('.iconsearch__content.container__main');

iconsearch.addEventListener("click", function(e) {
    if(!boxsearch.classList.contains('show__search')){
        boxsearch.classList.add('show__search');
    }
    e.preventDefault(e);
});


var iconclose = one('#btn__close');
    iconclose.addEventListener('click', function(e){

    if(boxsearch.classList.contains('show__search')){
        boxsearch.classList.remove('show__search');
    }

    e.stopPropagation(e);
});



// Javascript Mobile Menu
var clickMenumobile = one('#menu__mobile');
var showmenuMobile = one('.list__menu__mobile');

clickMenumobile.addEventListener("click", function (e){

    showmenuMobile.classList.add('showMenu__mobile');
    showmenuMobile.classList.remove('hiddenMenu__mobile');


});

var closemenuMobile = one('#close__menu__mobile');
closemenuMobile.addEventListener("click", function(e) {
    showmenuMobile.classList.toggle('showMenu__mobile');
    showmenuMobile.classList.add('hiddenMenu__mobile');
});

//Slider ảnh sản phẩm chi tiết
const image = tows('img.image__product');
const imageMain = one('#image__main');

image.forEach(function(item, index){
    item.onclick=function(){
        const urlImage = this.getAttribute('src');
        imageMain.setAttribute('src',urlImage);
    }
});

// Danh sách ảnh slide
const slideImage = tows('.slide__image>ul>li.slide__image__active');
const next = one('.icon__slide--right');
const prevIcon = one('.icon__slide--left');
const firstItem = one('.slide__image ul li:first-child');

prevIcon.onclick=function(){
    if(firstItem.classList.contains('test') && firstItem.classList.contains('slide__image__active')){
        prevIcon.onclick=function(){}
    }else {
        const prevImage = one('li.slide__image__active.test');// test
        prevImage.classList.remove('test');// Bo di class test cua doi tuong phia sau
        
        const prevItem = prevImage.previousElementSibling;// Lay ra doi tuong phia sau lien ke sau test
        //Add them class cho doi tuong phia sau lien ke
        prevItem.classList.add('slide__image__active');
        prevItem.classList.add('test');
        
        const prevfirst = one('li.slide__image__active.four');// four
        prevfirst.classList.remove('slide__image__active');
        prevfirst.classList.remove('four');

        const prveFour = prevfirst.previousElementSibling;
        prveFour.classList.add('four');
    }
}

next.onclick=function(){
    const slideImage = tows('.slide__image>ul>li.slide__image__active');
    const lastItem = one('.slide__image ul li:last-child');
    console.log(lastItem);
    
    if(lastItem.classList.contains('four') && lastItem.classList.contain('slide__image__active')){
        next.onclick=function(){}
    }else{
        slideImage.forEach(function(itemSlide, index){
            if(index == 0){
                itemSlide.classList.remove('slide__image__active');
                itemSlide.classList.remove('test');
                const elementdownNext = itemSlide.nextElementSibling;
                elementdownNext.classList.add('test');
            }
            if(index == 4){
                itemSlide.classList.remove('four');
                
                const elementupNext = itemSlide.nextElementSibling;
                elementupNext.classList.add('four');
                elementupNext.classList.add('slide__image__active');
            }
        });
    }
}

// Tab chuyen trong san pham chi tiet


const items = tows('.item');
const tab = tows('.tab__pane');

const line = one('.detail__product .line');
const tabActive = one('.item.item__active');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = (tabActive.offsetWidth-2) + 'px';

items.forEach(function(tabs, index){
    const pane = tab[index];
    tabs.onclick=function(){
        one('.item.item__active').classList.remove('item__active');
        one('.tab__pane.tab__pane__active').classList.remove('tab__pane__active');
    
        this.classList.add('item__active');
        pane.classList.add('tab__pane__active');
    
        line.style.left = this.offsetLeft + 'px';
        line.style.width = (this.offsetWidth-1) + 'px';
    }
});



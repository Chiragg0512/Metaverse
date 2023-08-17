import './index.css';

const menu = document.querySelector(".menu");
const menucross = document.querySelector(".menucross");
const menuline = document.querySelector(".menuline");
const loader = document.querySelector(".loader");


menuline.addEventListener('click', function(){
    menuline.classList.add('hidden');
    menucross.classList.remove('hidden');
    menu.classList.add('translate-x-0');
    menu.classList.remove('translate-x-[300%]');
});

menucross.addEventListener('click', function(){
    menuline.classList.remove('hidden');
    menucross.classList.add('hidden');
    menu.classList.remove('translate-x-0');
    menu.classList.add('translate-x-[300%]');

});

window.addEventListener('load', function(){
        loader.classList.add('opacity-0');
        loader.classList.add('invisible');

  
});       

const fromDownObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-down');
            observer.unobserve(entry.target);
        }
    });
});

const fromDownElement = document.querySelectorAll('.from-down');
fromDownElement.forEach((element) => fromDownObserver.observe(element));


const fromupObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-up');
            observer.unobserve(entry.target);
        }
    });
});

const fromupElement = document.querySelectorAll('.from-up');
fromupElement.forEach((element) => fromupObserver.observe(element));


// butt1.addEventListener('click', function(){
//     section1.classList.add('active');
//     section2.classList.remove('active');
//     section3.classList.remove('active');
// })
// butt1.addEventListener('click', function(){
//     section1.classList.add('active');
//     section2.classList.remove('active');
//     section3.classList.remove('active');
// })butt1.addEventListener('click', function(){
//     section1.classList.add('active');
//     section2.classList.remove('active');
//     section3.classList.remove('active');
// })











const fromleftObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-left');
            observer.unobserve(entry.target);
        }
    });
});

const fromleftElement = document.querySelectorAll('.from-left');
fromleftElement.forEach((element) => fromleftObserver.observe(element));




const fromrightObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-right');
            observer.unobserve(entry.target);
        }
    });
});

const fromrightElement = document.querySelectorAll('.from-right');
fromrightElement.forEach((element) => fromrightObserver.observe(element));







const fromzObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-z');
            observer.unobserve(entry.target);
        }
    });
});

const fromzElement = document.querySelectorAll('.from-z');
fromzElement.forEach((element) => fromzObserver.observe(element));






const fromrotateObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('from-rotate');
            observer.unobserve(entry.target);
        }
    });
});

const fromrotateElement = document.querySelectorAll('.from-rotate');
fromrotateElement.forEach((element) => fromrotateObserver.observe(element));













// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
const imgs= document.querySelectorAll(".img");
let openImg = 0;

imgs.forEach((img, index) => {
    img.addEventListener('click', function(){
        imgs[openImg].classList.remove('w-[40%]');
        imgs[openImg].classList.add('w-[15%]');
        imgs[index].classList.remove('w-[15%]');
        imgs[index].classList.add('w-[40%]');
        openImg=index;
    });
});






const imgmm= document.querySelectorAll(".imgmm");
let openImgmm = 0;

imgmm.forEach((imgm, index) => {
    imgm.addEventListener('click', function(){
        imgmm[openImgmm].classList.remove('h-[40%]');
        imgmm[openImgmm].classList.add('h-[15%]');
        imgmm[index].classList.remove('h-[15%]');
        imgmm[index].classList.add('h-[40%]');
        openImgmm=index;
   });
});
// first.addEventListener('click', function(){
//     first.classList.toggle('h-32');
//    first.classList.toggle('lg:w-96');
//    first.classList.toggle('md:w-96');


// });

// second.addEventListener('click', function(){
//     second.classList.toggle('h-32');
//     second.classList.toggle('lg:w-96');
//     second.classList.toggle('md:w-96');
//  });

//  third.addEventListener('click', function(){
//     third.classList.toggle('h-32');
//     third.classList.toggle('lg:w-96');
//     third.classList.toggle('md:w-96');
// });
//  four.addEventListener('click', function(){
//     four.classList.toggle('h-32');
//     four.classList.toggle('lg:w-96');
//     four.classList.toggle('md:w-96');
// });
//  five.addEventListener('click', function(){
//     five.classList.toggle('h-32');
//    five.classList.toggle('lg:w-96');
//    five.classList.toggle('md:w-96');
// });
   
 
// console.log(Math.random());





// const wP = [
//     [0,1,2],
//     [0,1,2],
//     [0,1,2]
//     [0,1,2]

// ];

// const checkWEWimnner = function(){
//     wP.forEach((p) => {
//         if()
//     })
// };













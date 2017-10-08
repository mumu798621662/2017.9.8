let daohang = document.querySelector('.daohang');
 let lis = document.querySelectorAll('.lis');
 let ab = document.querySelectorAll('.ab');
 for (let i=0;i<lis.length;i++){
    lis[i].onmouseover=function(){
          ab[i].style.fontSize='20px';
        }
     lis[i].onmouseout=function(){
         ab[i].style.fontSize='18px';
     }

     }

// banner
let bannerbox = document.querySelector('.banner-box');
let lefts = bannerbox.querySelector('.banner-left');
let rights = bannerbox.querySelector('.banner-right');
let mid = bannerbox.querySelector('.banner-mid');
let mid1 = document.querySelector('.banner-mid1')
let yuan = document.querySelectorAll('.smallyuan');
let li = mid.querySelectorAll('li');
console.log(li);


let i=0;
lefts.onclick=function(){
    if (i==2) {
        // mid1.style.left=0+'px';
       return;
    }
    i++;
   // mid1.style.left=-1080*i+'px';
    animate(mid1,{left:-1080*i})
};
rights.onclick=function(){
    if (i==0) {
        // mid1.style.left=-3240+'px';
       return;
    }
    i--;
    // mid1.style.left=-1080*i+'px';
    animate(mid1,{left:-1080*i})
};

let t = setInterval(function(){
    if (i==2) {
        i--;
        animate(mid1,{left:-1080*i});
    }else if(i!=2){
        i++;
        animate(mid1,{left:-1080*i})
    }

},3000)

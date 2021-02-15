const {body} = document;
const slider=document.querySelector('.hero'),
slidePagination=document.querySelector('.slides-controls-btn '),
hamburger=document.querySelector('.hamburger');

let slidePaginationBtn;


// hero secion sceion slider images 
let images=[
'/img/1.jpg',
'/img/2.jpg',
'/img/3.jpg',
'/img/4.jpg'
],
x,
 i,
  j,
   l, 
   ll, 
   selElmnt,
    a,
     b,
      c
index=0,
time=5000;

  slider.style.backgroundImage=`linear-gradient(rgba(2, 2, 2, 0.9),
  rgba(0, 0, 0, 0.9)),
     url(${images[index]})`

     images.forEach((image,i)=>{
      // get the length of the images array and create pagniaition for the background image slide
     	const el =document.createElement('span');
     	el.className='control';
     	el.innerHTML=i+1;
     	slidePagination.appendChild(el);
slidePaginationBtn=slidePagination.querySelectorAll('.control');

slidePaginationBtn[index].classList.add('active')


     })

// a function that change background image at a given interval
const changeBg=()=>{
// remove active class of hero secion by default
slidePaginationBtn[index].classList.remove('active');
// increament the image array
	index++;

	  slider.style.backgroundImage=`linear-gradient(rgba(2, 2, 2, 0.9),
    rgba(0, 0, 0, 0.9)),
     url(${images[index]})`;


    //  checks if index of image is greater than the length of the array of images
     if(index >images.length-1){
     	index=0	
     }
    //  add new add image on increase of index +1
	  slider.style.backgroundImage=`linear-gradient(rgba(2, 2, 2, 0.9),
    rgba(0, 0, 0, 0.9)),
     url(${images[index]})`;
slidePaginationBtn[index].classList.add('active')
}
// animate the background
// width time 
setInterval(changeBg,time);


// hamburger open / close event
hamburger.addEventListener('click',function(){
	this.classList.toggle('change');
	body.querySelector('header').querySelector('.nav-links').classList.toggle('active');
	body.querySelector('#root-main-container').classList.toggle('active')
})


// animation on scroll function
function scroller() {
  // bg_Smooth.style=50+'%'
  // console.log(window.pageYOffset-window.innerHeight/100+'px')
  // if( bg_Smooth.style.top =='0px'){
  //     bg_Smooth.style.top=0.02+'px' 
  // }
  // if(bg_Smooth.style.top == '5px'){
  //     bg_Smooth.style.top=0.024+'px' 

  // }
  const elmn = document.querySelectorAll('.scroller');
  for (let i = 0; i < elmn.length; i++) {
      const elmnOffset = elmn[i].getBoundingClientRect().top;
      if (elmnOffset < window.innerHeight) {
          elmn[i].classList.add(elmn[i].dataset.scroll);
          elmn[i].classList.add('active');
          //            if (elmn[i].dataset.scrollDelay) {
          elmn[i].setAttribute('style', 'animation-delay:' + elmn[i].dataset.scrollDelay + 'ms')
          //            }

      } else {
          elmn[i].classList.remove('active')

      }
  }
}


// initiate animation on scroll 
window.addEventListener('scroll',scroller)







// custom SELECT input

/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);